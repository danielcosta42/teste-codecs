import { Component, OnInit } from '@angular/core';
import {CriarAnunciosService} from './criaranuncio-service'
import { MEAT_API } from './../app.api';
import {Select} from './select.model'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Http } from '@angular/http';
import {Anuncio} from './novoanuncio.model'

@Component({
  selector: 'mt-criar-anuncio',
  templateUrl: './criar-anuncio.component.html'
})
export class CriarAnuncioComponent implements OnInit {

  carros: Select[]
  anos: Select[]
  anuncio: Anuncio[]
  uploadForm: FormGroup
  imagePath: string

  constructor(private CriarAnunciosService: CriarAnunciosService, public formBuilder: FormBuilder, private http: Http) {

    this.uploadForm = this.formBuilder.group({
      name: ['', Validators.required],
      ano: ['', Validators.required],
      valor: ['', Validators.required],
      km: ['', Validators.required],
      cor: ['', Validators.required],
      imagePath: [null]

    });

  }


  ngOnInit() {
    this.CriarAnunciosService.carros()
      .subscribe(carros => this.carros = carros)

    this.CriarAnunciosService.anos()
        .subscribe(anos => this.anos = anos)

    }

    get uf(){
        return this.uploadForm.controls;
      }

      onImageChange(e) {
        const reader = new FileReader();

        if(e.target.files && e.target.files.length) {
          const [file] = e.target.files;
          reader.readAsDataURL(file);

          reader.onload = () => {
            //this.imgFile = reader.result as string;
            this.uploadForm.patchValue({
              imagePath: reader.result
            });

          };
        }
      }


    onSubmit() {
        var formData: any = new FormData();
        formData.append('id', 'asdljkfjsdkljsalkdj');
        formData.append('name', this.uploadForm.get('name').value);
        formData.append('ano', this.uploadForm.get('ano').value);
        formData.append('valor', this.uploadForm.get('valor').value);
        formData.append('km', this.uploadForm.get('km').value);
        formData.append('cor', this.uploadForm.get('cor').value);

        console.log(this.uploadForm.value)



        console.log(this.uploadForm.value)
        this.http.post(`${MEAT_API}/anuncios`, this.uploadForm.value).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        )

      }

  }

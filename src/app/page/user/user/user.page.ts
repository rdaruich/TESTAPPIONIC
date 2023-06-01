import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { MenuService } from 'src/app/service/menu/menu.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userForm: FormGroup = this.formBuilder.group({
    name: ["", Validators.required]
  });
  constructor(
    public formBuilder: FormBuilder,
    private menuService:MenuService
  ) { }

  ngOnInit() {
    this.menuService.menubase.title="Usuario";
  }
  takePhoto = async () => {

    // const photo: any = document.getElementById("photo");
    // photo.src = this.photography
    const image = await Camera.getPhoto({
      allowEditing: true,
      resultType: CameraResultType.Uri,
      quality: 60
    });
    // this.photography = image.webPath;
    console.log(image);
    const photo: any = document.getElementById("photo");
    console.log(photo);

    photo.src = image.webPath
    this.userForm.controls['photo'].setValue(image.webPath)
  };
  submitForm() {

  }
}

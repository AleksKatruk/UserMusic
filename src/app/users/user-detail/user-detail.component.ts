import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ApiService} from "../../../services/api.service";
import {} from '@types/googlemaps';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public music: [string];
  public lat: number;
  public lng: number;


  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }


  ngOnInit() {
    this.lat = +this.data.user.address.geo.lat;
    this.lng = +this.data.user.address.geo.lng;
    console.log(this.lat);
    this.apiService.getAlbum(this.data.user.id).subscribe(item => {
      this.music = item;
    });

  }
}

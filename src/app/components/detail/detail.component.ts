import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public albums;
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  showItems() {
    this.api.getItems().subscribe((data) => {
      this.albums = data;
      console.log(this.albums);
    });
  }
}

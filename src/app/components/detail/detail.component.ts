import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public albums;
  public clickOnEdit: boolean = false;
  public clickOnAddAlbum: boolean = false;
  constructor(private api: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showItems();
  }

  showItems() {
    this.api.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  deleteAlbum(index) {
    this.api
      .deleteAlbum(this.albums[index]._id)
      .subscribe((data) => this.showItems());
  }

  editAlbum(index, title, cover, year, genre) {
    let edit = {
      title: title,
      coverUrl: cover,
      year: year,
      genre: genre,
    };
    this.api
      .editAlbum(this.albums[index]._id, edit)
      .subscribe((data) => this.showItems());
  }

  addAlbum(title, cover, year, genre) {
    let data = {
      title: title,
      coverUrl: cover,
      year: year,
      genre: genre,
    };
    this.api.createAlbum(data).subscribe((data) => {
      this.albums.push(data);
      this.showItems();
      this.clickOnAddAlbum = false;
    });
  }
}

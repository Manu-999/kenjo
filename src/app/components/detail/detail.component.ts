import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Album } from '../../models/album';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public albums;
  public artists;
  public clickOnEdit: boolean = false;
  public clickOnAddAlbum: boolean = false;
  public clickedOnLinkArtist: boolean = false;
  public artistsMapped: [];
  constructor(private api: ApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.showItems();
    this.api.getArtists().subscribe((artists) => (this.artists = artists));
    // this.artistsMapped = this.albums.map((album) => {
    //   console.log(album.artistId);
    //   if (album.artistId) {
    //     this.api.getArtist(album.artistId).subscribe((artist) => artist);
    //   } else {
    //     return null;
    //   }
    // });
  }

  showItems() {
    this.api.getAlbums().subscribe((albums) => {
      this.albums = albums;
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
    let album = new Album(title, cover, year, genre);
    this.api.createAlbum(album).subscribe((data) => {
      this.albums.push(data);
      this.showItems();
      this.clickOnAddAlbum = false;
    });
  }

  linkToArtist(indexAlbum, indexArtist) {
    let artistId = this.artists[indexArtist]._id;
    this.api
      .editAlbum(this.albums[indexAlbum]._id, { artistId: artistId })
      .subscribe((artist) => {
        this.showItems();
        this.clickedOnLinkArtist = false;
      });
  }
}

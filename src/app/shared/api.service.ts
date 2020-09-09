import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/artist';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000';
  public artist: Artist;
  public album: Album;
  public artists: Artist[];
  public albums: Album[];

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(this.url + '/albums/all');
  }
}

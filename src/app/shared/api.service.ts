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
  public index: number;

  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get(this.url + '/albums/all');
  }

  getAlbum(id: string) {
    return this.http.get(this.url + '/album/' + id);
  }

  deleteAlbum(id: string) {
    return this.http.delete(this.url + '/album/' + id);
  }

  editAlbum(id: string, data: {}) {
    return this.http.put(this.url + '/album/' + id, data);
  }

  createAlbum(data: {}) {
    return this.http.post(this.url + '/album', data);
  }
}

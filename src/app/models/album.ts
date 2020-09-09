export class Album {
  _id: string;
  title: string;
  artistId: string;
  coverUrl: string;
  year: number;
  genre: string;
  _createdAt: string;
  _updatedAt: string;

  constructor(title, coverUrl, year, genre) {
    (this.title = title),
      (this.coverUrl = coverUrl),
      (this.year = year),
      (this.genre = genre);
  }
}

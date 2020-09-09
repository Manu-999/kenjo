export class Artist {
  _id: string;
  name: string;
  photoUrl: string;
  birthDate: Date;
  deathDate: Date;
  _createdAt: string;
  _updatedAt: string;

  constructor(name, photoUrl, birthDate, deathDate) {
    (this.name = name),
      (this.photoUrl = photoUrl),
      (this.birthDate = birthDate),
      (this.deathDate = deathDate);
  }
}

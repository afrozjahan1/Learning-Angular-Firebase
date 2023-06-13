import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firestore: Firestore = inject(Firestore);

  constructor() {}

  public async getfirebasedata() {
    const colRef =  collection(this.firestore, 'firebasedata');
    const snap = await getDocs(colRef);
    return snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }
}
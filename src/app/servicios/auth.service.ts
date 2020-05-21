import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { JwtResponseI } from '../interfaces/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable()
export class AuthService {
  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {

  } 


  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string) {
    try {
      //  const { user } = await this.afAuth.signInWithEmailAndPassword(
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      //   this.updateUserData(user);
      return result;

    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      //  await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  /* private updateUserData(user: User) {
     const userRef: AngularFirestoreDocument<User> = this.afs.doc(
       `users/${user.uid}`
     );
 
     const data: User = {
       uid: user.uid,
       email: user.email,
       emailVerified: user.emailVerified,
       displayName: user.displayName,
       photoURL: user.photoURL,
       role: 'ADMIN',
     };
 
     return userRef.set(data, { merge: true });
   }*/
  
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  childs: any[] = [];
  selectedChild: any = null;

  socialNetworks = [
    { icon: 'fab fa-facebook', username: '' },
    { icon: 'fab fa-twitter', username: '' },
    { icon: 'fab fa-instagram', username: '' }
  ];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const username = 'asidikidemo';
    this.userService.getChilds(username).subscribe({
      next: (response) => {
        console.log('Réponse brute API enfants :', response);
        this.childs = response || [];
        console.log('Liste des enfants récupérée :', this.childs);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des enfants :', error);
      }
    });
  }




  // getFullImageUrl(avatarPath: string): string {
  //   const baseUrl = 'https://webserver.staging.4indata.fr';
  //   return avatarPath ? `${baseUrl}${avatarPath}` : 'assets/imgsmart.png';
  // }


  redirectToEditUser(): void {
    this.router.navigate(['/edit-user']);
  }


  saveChild(): void {
    if (this.selectedChild) {
      this.userService.updateChild(this.selectedChild.id, this.selectedChild).subscribe({
        next: () => {
          alert('Informations de l’enfant mises à jour avec succès.');
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour des informations de l’enfant :', error);
        }
      });
    }
  }

  onCancel(): void {
    this.selectedChild = null;
  }

  addSocialNetwork(): void {
    this.socialNetworks.push({ icon: '', username: '' });
  }

  childds = [
    {
      id: 1,
      first_name: 'Jerry',
      last_name: 'Smith',
      avatar: 'assets/image7.png' // Image statique
    },
    {
      id: 2,
      first_name: 'Alice',
      last_name: 'Smith',
      avatar: 'assets/avatars/alice.png' // Image statique
    },
    {
      id: 3,
      first_name: 'Robin',
      last_name: 'Smith',
      avatar: 'assets/avatars/robin.png' // Image statique
    },
    {
      id: 4,
      first_name: 'New Child',
      last_name: '',
      avatar: 'assets/avatars/default.png' // Image par défaut
    }
  ];



}




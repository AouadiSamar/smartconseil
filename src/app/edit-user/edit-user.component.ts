import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    birthday: '',
    phone: '',
    avatar: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const username = 'john';
    this.userService.getUser(username).subscribe({
      next: (response) => {
        this.user = response;
        console.log('Données utilisateur récupérées :', this.user);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        alert('Impossible de charger les données utilisateur.');
      }
    });
  }

  onSubmit(): void {
    const updatedUser = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      gender: this.user.gender,
      birthday: this.user.birthday,
    };

    this.userService.updateUser(this.user.username, updatedUser).subscribe({
      next: (response) => {
        console.log('Mise à jour réussie :', response);
        alert('Les informations ont été enregistrées avec succès !');
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour :', error);
        alert('Une erreur est survenue lors de l’enregistrement des informations.');
      }
    });
  }

  onReplacePhoto(): void {
    alert('replacephoto');
  }

  onDeletePhoto(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer la photo ?')) {
      this.user.avatar = '';
      alert('Photo supprimée.');
    }
  }

  redirectToProfile(): void {
    this.router.navigate(['/profile']);
  }


  onCancel(): void {
    alert('Les modifications ont été annulées.');
  }


}

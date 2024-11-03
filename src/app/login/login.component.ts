import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../service/cliente.service';
import { VeterinarioService } from '../service/veterinario.service';
import { Cliente } from '../model/cliente';
import { Veterinario } from '../model/veterinario';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  selectedType: string = '';
  cliente?: Cliente;
  veterinario?: Veterinario;

  // Credenciales predefinidas para el administrador
  private adminUsername: string = 'admin';
  private adminPassword: string = 'Jave1234*';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private clienteService: ClienteService,
    private veterinarioService: VeterinarioService // Inyectar el servicio de veterinario
  ) {
    this.loginForm = this.fb.group({
      type: ['', Validators.required],
      cedulaVeterinario: [''],
      passwordVet: [''],
      usuario: [''],
      password: [''],
      cedula: [''],
    });
  }

  // Cambia el tipo de usuario seleccionado
  onUserTypeChange(event: any) {
    this.selectedType = event.target.value;
  }

  ngOnInit(): void {
    console.log(this.authService.getUserRole());
    // Verifica si el usuario ya tiene un token y un rol válido
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole();
      if (role === 'VETERINARIO') {
        this.router.navigate(['/veterinario']);
      } else if (role === 'CLIENTE') {
        this.router.navigate(['/cliente']);
      } else if (role === 'ADMIN') {
        this.router.navigate(['/admin']);
      }
    }
  }

  // Enviar el formulario al backend
  onSubmit() {
    const userType = this.loginForm.get('type')?.value;

    // Administrador
    if (userType === '2') {
      const usuarioAdmin = this.loginForm.get('usuario')?.value;
      const passwordAdmin = this.loginForm.get('password')?.value;

      // Verificar si las credenciales coinciden con las predefinidas
      if (
        usuarioAdmin === this.adminUsername &&
        passwordAdmin === this.adminPassword
      ) {
        // Redirigir a la página de administración
        this.router.navigate(['/admin']);
      } else {
        console.error('Credenciales de administrador incorrectas');
        this.router.navigate([
          '/error/Credenciales de administrador incorrectas',
        ]);
      }
    }

    // Veterinario
    if (userType === '1') {
      const user: User = {
        cedula: this.loginForm.get('cedulaVeterinario')?.value,
        clave: this.loginForm.get('passwordVet')?.value,
      };

      this.veterinarioService.login(user).subscribe(
        (data) => {
          this.authService.setToken(String(data));
          this.router.navigate(['/veterinario']);
        },
        (error) => {
          console.error('Error en inicio de sesión:', error);
          // Aquí puedes mostrar un mensaje de error al usuario o redirigirlo a una página de error
          this.router.navigate([
            '/error',
            'No se encontró al veterinario o las credenciales son incorrectas',
          ]);
        }
      );

      // const cedulaVeterinario = this.loginForm.get('cedulaVeterinario')?.value;
      // const passwordVet = this.loginForm.get('passwordVet')?.value;

      // // Llamar al servicio para buscar al veterinario por su cédula y contraseña
      // this.veterinarioService.findByCedula(cedulaVeterinario).subscribe(
      //   (veterinario: Veterinario) => {
      //     if (veterinario == null) {
      //       console.error('Veterinario no encontrado');
      //       this.router.navigate(['/error/Veterinario no encontrado']);
      //     } else {
      //       console.log(veterinario);
      //       // Si el veterinario existe y las credenciales son correctas, redirigir a la página del veterinario
      //       if (veterinario.clave == passwordVet) {
      //         this.router.navigate(['/veterinario', veterinario.id]);
      //       } else {
      //         console.error(
      //           'Veterinario no encontrado o credenciales incorrectas'
      //         );
      //         this.router.navigate([
      //           '/error/Veterinario no encontrado o credenciales incorrectas',
      //         ]);
      //       }
      //     }
      //   },
      //   (error) => {
      //     console.error('Error al verificar el veterinario:', error);
      //     this.router.navigate(['/error/Error al verificar el veterinario']);
      //   }
      // );
    }

    // Cliente
    if (userType === '3') {
      const user: User = {
        cedula: this.loginForm.get('cedula')?.value,
        clave: '123',
      };

      this.clienteService.login(user).subscribe(
        (data) => {
          this.authService.setToken(String(data));
          this.router.navigate(['/cliente']);
        },
        (error) => {
          console.error('Error en inicio de sesión:', error);
          // Aquí puedes mostrar un mensaje de error al usuario o redirigirlo a una página de error
          this.router.navigate([
            '/error',
            'No se encontró el cliente o las credenciales son incorrectas',
          ]);
        }
      );

      // const cedulaCliente = this.loginForm.get('cedula')?.value;

      // // Llamar al servicio para buscar el cliente por su cédula
      // this.clienteService.findByCedula(cedulaCliente).subscribe(
      //   (cliente: Cliente) => {
      //     // Si el cliente existe, redirigir a la página del cliente
      //     if (cliente) {
      //       this.router.navigate(['/cliente', cliente.id]);
      //     } else {
      //       console.error('Cliente no encontrado');
      //       this.router.navigate(['/error/Cliente no encontrado']);
      //     }
      //   },
      //   (error) => {
      //     console.error('Error al verificar el cliente:', error);
      //     this.router.navigate(['/error/Error al verificar el cliente']);
      //   }
      // );
    }
  }
}

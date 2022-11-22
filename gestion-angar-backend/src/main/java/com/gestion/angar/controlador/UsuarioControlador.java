package com.gestion.angar.controlador;

import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.angar.repositorio.UsuarioRepositorio;
import com.gestion.angar.service.UsuarioService;
import com.gestion.angar.model.*;

@RestController
@RequestMapping("/api/v1/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioControlador {
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private UsuarioRepositorio repositorio;
	
	@GetMapping("/search")
	public ResponseEntity<List<Usuario>> searchUsuarios(@RequestParam("query") String query,@RequestParam("password") String passoword){
		return ResponseEntity.ok(usuarioService.searchUsuarios(query,passoword));
	}
	
	@GetMapping("/listado")
	public List<Usuario> listarTodosLosUsuarios(){
		return repositorio.findAll();
	}
	
	@PostMapping("/registro")
	public Usuario guardarUsuario(@RequestBody Usuario usuario) {
		
		 // Recipient's email ID needs to be mentioned.
        String to = usuario.getCorreo();//"enrix2015@gmail.com";
        // Sender's email ID needs to be mentioned
        String from = "angar7proyecto@gmail.com";
        // Assuming you are sending email from through gmails smtp
        String host = "smtp.gmail.com";
        // Get system properties
        Properties properties = System.getProperties();
        // Setup mail server
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");
        // Get the Session object.// and pass username and password
        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("angar7proyecto@gmail.com", "pgxkjdswypwwfwfp");
            }
        });
        // Used to debug SMTP issues
        session.setDebug(true);
        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);
            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));
            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            // Set Subject: header field
            message.setSubject("Bienvenido a Angar7");
            // Now set the actual message
            message.setText("Sus credenciales son:"+ "\n" +"usuario: "+usuario.getUsuario()+ "\n" +"contraseña: "+usuario.getContrasena());
            System.out.println("sending...");
            // Send message
            Transport.send(message);
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
		
		return repositorio.save(usuario);
	}
	
}

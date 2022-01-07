package com.p2.recApp.springemailclient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/email")
public class EmailController {

	private EmailSenderService emailSenderService;
	@Autowired
	public EmailController(EmailSenderService emailSenderService) {
		this.emailSenderService = emailSenderService;
	}

	@PostMapping("/email-sent") 
	public String EmailInfo() {
		emailSenderService.sendSimpleEmail("qwinkypoo@gmail.com",
				"[insert user password]",
				"Lost Password");

		return "redirect:/login";
	}
}	



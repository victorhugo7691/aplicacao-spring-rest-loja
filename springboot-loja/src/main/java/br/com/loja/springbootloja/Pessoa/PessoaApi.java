package br.com.loja.springbootloja.Pessoa;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/pessoa")
public class PessoaApi {
    
    @GetMapping
    public Pessoa getPessoa() {
        final Pessoa pessoa = new Pessoa();
        pessoa.setNome("Jão");
        pessoa.setStatus(true);
        pessoa.setTelefone(998456374);
        return pessoa;
    }
}

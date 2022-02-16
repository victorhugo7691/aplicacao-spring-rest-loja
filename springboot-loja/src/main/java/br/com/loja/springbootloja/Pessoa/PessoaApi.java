package br.com.loja.springbootloja.Pessoa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/pessoa")
public class PessoaApi {
    
    @Autowired
    PessoaService pessoaService;
    
    @GetMapping
    public List<Pessoa> getPessoa() {
        return this.pessoaService.buscarPessoas();
    }
}

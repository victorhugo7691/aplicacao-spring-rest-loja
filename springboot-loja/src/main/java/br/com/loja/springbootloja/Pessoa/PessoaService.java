package br.com.loja.springbootloja.Pessoa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaService {
    
    @Autowired
    PessoaRepository pessoaRepository;
    
    public List<Pessoa> buscarPessoas() {
        return this.pessoaRepository.buscarPessoas();
    }
}

package br.com.loja.springbootloja.Pessoa;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pessoa")
public class Pessoa {
    
    @Id
    @Column(name = "pes_id", unique = true)
    private Long id;
    
    @Column(name = "pes_data_nascimento", nullable = false)
    private Date dataDeNascimento;
    
    @Column(name = "pes_telefone", nullable = false)
    private Integer telefone;
    
    @Column(name = "pes_status", nullable = false)
    private Boolean status;
    
    @Column(name = "pes_nome", nullable = false)
    private String nome;
    
    public Long getId() {
        return this.id;
    }
    
    public void setId(final Long id) {
        this.id = id;
    }
    
    public Date getDataDeNascimento() {
        return this.dataDeNascimento;
    }
    
    public void setDataDeNascimento(final Date dataDeNascimento) {
        this.dataDeNascimento = dataDeNascimento;
    }
    
    public Integer getTelefone() {
        return this.telefone;
    }
    
    public void setTelefone(final Integer telefone) {
        this.telefone = telefone;
    }
    
    public Boolean getStatus() {
        return this.status;
    }
    
    public void setStatus(final Boolean status) {
        this.status = status;
    }
    
    public String getNome() {
        return this.nome;
    }
    
    public void setNome(final String nome) {
        this.nome = nome;
    }
    
}

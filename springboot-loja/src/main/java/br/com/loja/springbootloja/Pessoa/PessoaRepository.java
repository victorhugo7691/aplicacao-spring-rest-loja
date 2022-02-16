package br.com.loja.springbootloja.Pessoa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

@Repository
public class PessoaRepository {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public List<Pessoa> buscarPessoas() {
        final CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        final CriteriaQuery<Pessoa> criteria = cb.createQuery(Pessoa.class);
        final Root<Pessoa> from = criteria.from(Pessoa.class);
        
        criteria.select(from);
        
        final TypedQuery<Pessoa> query = this.entityManager.createQuery(criteria);
        try {
            return query.getResultList();
        } catch (final Exception e) {
            return null;
        }
    }
}

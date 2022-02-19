package br.com.loja.springbootloja.Pessoa;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Pessoa.class)
public abstract class Pessoa_ {

	public static volatile SingularAttribute<Pessoa, Integer> telefone;
	public static volatile SingularAttribute<Pessoa, String> nome;
	public static volatile SingularAttribute<Pessoa, Long> id;
	public static volatile SingularAttribute<Pessoa, Date> dataDeNascimento;
	public static volatile SingularAttribute<Pessoa, Boolean> status;

	public static final String TELEFONE = "telefone";
	public static final String NOME = "nome";
	public static final String ID = "id";
	public static final String DATA_DE_NASCIMENTO = "dataDeNascimento";
	public static final String STATUS = "status";

}


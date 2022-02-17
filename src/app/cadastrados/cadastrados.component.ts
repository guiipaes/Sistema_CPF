import { cadastrado } from './../modelos/Cadastrado';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.component.html',
  styleUrls: ['./cadastrados.component.css']
})
export class CadastradosComponent implements OnInit {

  titulo = 'Cadastrados';
  cadastroSelecionado!: boolean;
  texto!: string;
  cadForm!: FormGroup;
  novoCadastro = false;
  editId = -1;
  idGeral = -1;


  cadastrados = [
    {id: 0, nome: 'Gui', cpf: '11645687429', endereco: 'Rua Teste', telefone: '48991403546'},

  ];


  constructor(private fb: FormBuilder) {
    this.criarForm()
   }

  ngOnInit() {
  }

  criarForm() {
    this.cadForm = this.fb.group({
      id: [''],
      cpf: ['',Validators.required],
      nome: ['',Validators.required],
      endereco: [''],
      telefone: ['']
    });
  }

  iniciarCadastroNovo() {
    this.cadastroSelecionado = true;
    this.novoCadastro = true;
  }

  salvarNovo(cadForm: FormGroup) {
    cadForm.value.id = this.idGeral;
    this.cadastrados.push(cadForm.value);
    this.idGeral++;
  }

  cadsubmit(){
    console.log(this.cadForm.value);
  }

  cadastroSelect(cadastro: cadastrado) {
    this.cadastroSelecionado = true;
    this.novoCadastro = false;
    this.cadForm.patchValue(cadastro);
    this.editId = cadastro.id
    this.idGeral++ -1;
  }

  voltar() {
    this.cadastroSelecionado = false;
  }

  deleteCad(cadastrado: cadastrado){
    const del = this.cadastrados.findIndex(cad => cad.id == cadastrado.id)
    this.cadastrados.splice(del,1)
  }

  editCad(cadastro: FormGroup){
    const edit = (this.cadastrados.findIndex(cad => cad.id == this.editId))
    this.cadastrados[edit] = cadastro.value

  }


}

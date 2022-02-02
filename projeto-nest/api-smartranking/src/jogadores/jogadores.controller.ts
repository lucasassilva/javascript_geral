import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Get()
  message(): string {
    return 'Hello World';
  }

  @Post()
  async criarAtualizarJogador(@Body() criaJogadorDto: CriarJogadorDto) {
    const { email } = criaJogadorDto;
    return JSON.stringify(`{
      nome: ${email} ,
    }`);
  }
}

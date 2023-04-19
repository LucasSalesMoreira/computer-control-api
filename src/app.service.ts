import { Injectable } from '@nestjs/common';
import { exec } from 'shelljs';
import { promisify } from 'util';

@Injectable()
export class AppService {
  block() {
    /** Bloqueia o PC. */
    let command = `Rundll32.exe User32.dll,LockWorkStation`;
    exec(command);
  }

  async work() {
    this.runIntellij();
    this.runDBeaver();
    this.runInsomnia();
    this.runVPN();
  }

  private async runIntellij() {
    let command = '"D:\\DEVELOPER\\IntelliJ IDEA Community Edition 2022.1\\bin\\idea64.exe"';
    const execAsync = promisify(exec);
    execAsync(command)
      .then(() => console.log('IDE rodando'))
      .catch(() => console.log('A IDE quebrou!'));
  }

  private async runDBeaver() {
    let command = 'D:\\DEVELOPER\\DBeaver\\dbeaver.exe -nl en';
    const execAsync = promisify(exec);
    execAsync(command)
      .then(() => console.log('DBeaver rodando'))
      .catch(() => console.log('O DBeaver quebrou!'));
  }

  private async runInsomnia() {
    let command = '"C:\\Users\\Lucas Sales\\AppData\\Local\\insomnia\\Insomnia.exe"'
    const execAsync = promisify(exec);
    execAsync(command)
      .then(() => console.log('Insomnia rodando'))
      .catch(() => console.log('Insomnia quebrou!'));
  }

  private async runVPN() {
    let command = '"C:\\Program Files\\OpenVPN Connect\\OpenVPNConnect.exe"'
    const execAsync = promisify(exec);
    execAsync(command)
      .then(() => console.log('OpenVPN rodando'))
      .catch(() => console.log('OpenVPN quebrou!'));
  }
}

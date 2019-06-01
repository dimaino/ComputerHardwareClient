import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../..//shared/services/repository.service';//'./../../shared/services/repository.service';
import { Cpu } from './../../_interfaces/cpu.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent implements OnInit {

  public cpus: Cpu[];

  constructor(private http: HttpClient, private repository: RepositoryService) { }

  ngOnInit() {
    this.getAllCpus();
    let obs = this.http.get('https://localhost:5001/api/cpu/test');
    obs.subscribe(res => {
      console.log(res);
      this.cpus = res as Cpu[]
    });
  }

  public getAllCpus()
  {
    let apiAddress: string = 'api/cpu/test';
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.cpus = res as Cpu[];
    })
  }

}

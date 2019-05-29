import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service';
import { Cpu } from './../../_interfaces/cpu.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent implements OnInit {

  public cpus: Cpu[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.getAllCpus();
    let obs = this.http.get('https://localhost:5001/api/cpu');
    obs.subscribe(() => console.log('got it boiiii'));
  }

  // public getAllCpus()
  // {
  //   let apiAddress: string = 'api/cpu';
  //   this.repository.getData(apiAddress)
  //   .subscribe(res => {
  //     this.cpus = res as Cpu[];
  //   })
  // }

}

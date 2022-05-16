import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from './table.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    examenesTomados: string;
    pAcertadas: string;
    pTotal: string;
    userId: string;
    examenes: [];

    constructor(private router : Router, private route: ActivatedRoute, private tableSvc: TableService) { }

    ngOnInit(){
        this.userId = this.route.snapshot.paramMap.get('id');
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };

        var user = {userId: this.route.snapshot.paramMap.get('id')};
        this.tableSvc.getInfoTableUser(user).subscribe(
            data => {
                this.examenesTomados = data['TotalExamenes'];
                this.pAcertadas = data['PreguntasCorrectasGeneral'];
                this.pTotal = data['TotalPreguntasGeneral'];
                this.examenes = data['Examenes'];
                console.log(data);
        });
    }

    handlePage(e: PageEvent){
        this.page_size = e.pageSize
        this.page_number = e.pageIndex + 1
    }
    
    page_size: number = 5;
    page_number: number = 1;
    pageSizeOptions = [1]
}

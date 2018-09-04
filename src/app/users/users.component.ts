import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {UserDetailComponent} from "./user-detail/user-detail.component";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  public sub: any;
  displayedColumns: string[] = ['name', 'email', 'city', 'street', 'detail'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.sub = this.apiService.getUsers().subscribe(item => {
      this.dataSource.data = item;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  openDialog(elem): void {
    console.log('work');
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '90%',
      data: {user: elem}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

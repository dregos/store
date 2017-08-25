import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';

export class Buyer {
  public id : number;
  public first_name : string;
  public  last_name: string;
  private email : string;
  private products : Product[] = [];


  constructor(id, first_name, last_name, email) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }

}

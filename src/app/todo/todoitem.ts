// export class TodoItem{
//     konu: string;
//     durum: string;

    //tsconfig.json da true yapılırsa bu satırlar kullanılmalıdır.
    // constructor(konu:string, durum:string){
    //     this.konu = konu;
    //     this.durum = durum;
    // }
//}

// export class TodoItem{
//     constructor(public konu:string, public durum:string){
//         this.konu = konu;
//         this.durum = durum; 
//     }
// }

//const td = new TodoItem("JavaScript", "Yes");

// const td = new TodoItem();

export interface TodoItem{
    konu: string;
    durum: boolean;
}
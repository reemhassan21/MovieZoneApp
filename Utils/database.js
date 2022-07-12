
import SQLite from "react-native-sqlite-storage"; 
const database = SQLite.openDatabase('movies.db')

export function init(){
    const proimse = new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`CREATE TABLE IF NOT EXISTS Movies (
                id INTEGER PRIMARY KEY NOT NULL,
                Title TEXT NOT NULL,
                Image TEXT NOT NULL,
                Overview TEXT NOT NULL
            )`, [],
            ()=>{
                resolve()
            },
            (_,error)=>{
                reject(error)
            })
        })
    })
   return proimse
}

export function addMovie(title, image, overview){
    const proimse = new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`INSERT INTO Movies (Title, Image, Overview)
            VALUES (?,?,?)`,[title,image,overview],
            (_, result)=>{
                resolve(result)
            },
            (_,error)=>{ 
                reject(error)
            }
            )
        })
    })
} 
export function getMovies(){
    const promise = new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`SELECT * FROM Movies`,[],
            (_, result)=>{
                const List=[]
                var len = result.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = result.rows.item(i);
                    List.push(row)
                } 
                resolve(List)
            },
            (_,error)=>{ 
                reject(error)
            }
            )
        })

    }) 
    return promise;
}

export function deleteMovie(id){
    const promise = new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`DELETE FROM Movies WHERE id=?`,[id],
            (_, result)=>{
                resolve(result) 
            },
            (_,error)=>{ 
                reject(error)
            }
            )
        })

    })  
}
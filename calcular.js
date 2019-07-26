//Funcion llamar otras funciones
let caclSurface=(figure)=>{
    const surfaces =require('./surface.js');

    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    //Validar figura

    switch (figure) {
        case 'square':
            process.stdout.write('Ingrese el lado de un cuadrado: ');
            process.stdin.on('data',(chunk)=>{
                let side=parseFloat(chunk);
                let surface=surfaces.square(side);
                process.stdout.write(`La superficie del cuadrado es ${surface} metros cuadrados\n`); 
                process.stdin.destroy();
            });
            break;
        case 'triangle':
            process.stdout.write('Ingrese la base y la altura de un triangulo, separado por un espacio: ');
            process.stdin.on('data',(chunk)=>{
                let baseAndHeight=chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height);
                process.stdout.write(`La superficie del triangulo es ${surface} metros cuadrados\n`); 
                process.stdin.destroy();
            });
            break;
        case 'rectangle':
            process.stdout.write('Ingrese la base y la altura de un rectangulo, separado por un espacio: ');
            process.stdin.on('data',(chunk)=>{
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);
                process.stdout.write(`La superficie del rectangulo es ${surface} metros cuadrados\n`); 
                process.stdin.destroy();
            });
            break;
        case 'circle':
            process.stdout.write('Ingrese el radio del circulo: ');
            process.stdin.on('data',(chunk)=>{
                let surface = surfaces.circle(parseFloat(chunk));
                process.stdout.write(`La superficie del circulo es ${surface} metros cuadrados\n`); 
                process.stdin.destroy();
                });
            break;
        case 'elipse':
            process.stdout.write('Ingrese los semiejes mayor y menor del circulo : ');
            process.stdin.on('data',(chunk)=>{
                let semiejes = chunk.split(' ');
                let a = parseFloat(semiejes[0]);
                let b = parseFloat(semiejes[1]);
                let surface=surfaces.elipse(a,b);
                process.stdout.write(`La superficie del elipse es ${surface} metros cuadrados\n`); 
                process.stdin.destroy();
                });
            break;
        default:
                process.stdout.write('Olvido la opcion, intentelo de nuevo.\n');
                process.exit();
                break;
        }
    }
    caclSurface(process.argv[2]);
    process.on('exit',()=> {
        process.stdout.write('Hasta la proxima\n');
    });

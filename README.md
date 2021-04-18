##Validador Simples e Elegante com JavaScript
#### :link: [Link do meu post no Linkedin](https://www.linkedin.com/posts/mrbrunelli_javascript-every-tipoftheday-activity-6789588317840125952-2VPM)

### Como parar de fazer isso?
:x: Caso tenha muitos campos para validar, nosso código começará a ficar ilegível. Essa lógica só poderá ser utilizada para entidades do tipo "user". Caso eu queira validar outro tipo de entidade, terei que repetir esse formato em outro lugar do meu sistema.
```javascript
const isValidUser = (user) => {
  if (!user.name || !user.email || !user.phone || !user.city) {
    return false;
  }
}
```
:heavy_check_mark: Solução simples e elegante. 
Nesse formato nossa função não conhece o que está validando. Você pode usá-la de forma genérica em qualquer lugar, basta passar como argumento o tipo de dado esperado e o que irá ser validado.
```javascript
const expectedData = ["name", "email", "phone", "city"];

const isValidData = (expectedData, receivedData) => {
  return expectedData.every((key) => Object.keys(receivedData).includes(key));
};
```
/*var element: HTMLElement = document.getElementById(elementId: 'myElement');
var oldValue: string = element.getAttribute(qualifiedName: 'style')
var newValue: string = oldValue.replace(searchValue: '--my-var: старое значение', replaceValue: '--my-var: новое значение');
element.setAttribute(qualifiedName: 'style', newValue);*/
//var count :string = "5"
//document.documentElement.style.setProperty(property: '--count', element);
var sheet: CSSStyleSheet = document.styleSheets[0];
sheet.cssRules[0].style.setProperty('--count', 'новое значение');
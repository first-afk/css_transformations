const sliderInput = document.querySelector('#slider-input')
const allboxes = document.querySelectorAll('.box')
const allPills = document.querySelectorAll('.pill')
const allHiddenPills = document.querySelectorAll('.hidden-pill')
const allArrows = document.querySelectorAll('.arrow')
const body = document.querySelectorAll('body')
const expandPill = document.querySelector('#expand')
const BigX = document.querySelector('#big-x')
const SvgBig = document.querySelector('#big-x-svg')
const x_box = document.querySelector('.x-box')
const socialFan = document.querySelector('.social-fan')
const reversePill = document.querySelector('#reverse')
const iconPath = document.querySelector('#icon')
const boxContainer = document.querySelector('.box-container')
const hiddenBox = document.querySelector('.hidden-box')
const textBox = document.querySelector('.hidden-box .text-box')

let paletteIndex = 0
const xletterIndex = 11
const socialfanIndex = 1
const rotateIconIndex = 3

// start state

SvgBig.style.fill = colorPalette[paletteIndex][xletterIndex].fill

allPills.forEach((pill, i) => pill.style.backgroundColor = colorPalette[paletteIndex][i].fill)

allHiddenPills.forEach(hiddenpill => hiddenpill.style.backgroundColor = colorPalette[paletteIndex][socialfanIndex].fill)

const expand = () =>{
    if (hiddenBox.clientWidth !== 0){
        textBox.classList.add('hidden')
        setTimeout(() => hiddenBox.style.width = 0, 200)
    } else{
        hiddenBox.style.width = '1700px'
        setTimeout(() => textBox.classList.remove('hidden'), 500)
    }
}
expandPill.addEventListener('click', expand)

const reverse = () =>{
    if (boxContainer.style.flexWrap ==='wrap'){
        boxContainer.style.flexWrap = 'wrap-reverse'
    } else{
        boxContainer.style.flexWrap = 'wrap'
    }
}
reversePill.addEventListener('click', reverse)


const addTheme = (bodyBackgroundColor, strokeWidth, svgFill, opacity, lineColor, borderRadius, boxBackgroundColor, pillBackgroundColor) => 
{

    body.style.backgroundColor = bodyBackgroundColor
    BigX.style.strokeWidth = strokeWidth
    SvgBig.style.fill = svgFill || colorPalette[paletteIndex][xletterIndex].fill
    SvgBig.style.opacity = opacity
    x_box.style.backgroundColor = boxBackgroundColor || colorPalette[paletteIndex][xletterIndex].fill
    iconPath.style.stroke = lineColor || colorPalette[paletteIndex][rotateIconIndex].altstroke
    iconPath.style.strokeWidth = strokeWidth 


    allboxes.forEach((box, i) =>
     box.style.backgroundColor = boxBackgroundColor || colorPalette[paletteIndex][i].fill
    )


    allPills.forEach((pill, i) => {
        pill.style.opacity = opacity
        pill.style.backgroundColor = pillBackgroundColor || colorPalette[paletteIndex][i].fill
        pill.style.borderWidth = strokeWidth
        pill.style.borderColor = lineColor || colorPalette[paletteIndex][i].altstroke
        pill.style.borderBlockStyle = 'solid'
        pill.style.borderRadius = borderRadius
    })

    allHiddenPills.forEach(hiddenPill => {
        hiddenPill.style.opacity = opacity
        hiddenPill.style.borderWidth = strokeWidth
        hiddenPill.style.backgroundColor =  colorPalette[paletteIndex][socialfanIndex].fill
        hiddenPill.style.borderColor = lineColor || colorPalette[paletteIndex][socialfanIndex].altstroke
        hiddenPill.style.borderRadius = borderRadius
    })

    allArrows.forEach(arrow =>{
        arrow.style.borderBlockStyle = 'solid'
        arrow.style.borderColor = lineColor
        arrow.style.borderWidth = '0 ' + strokeWidth + ' '+ strokeWidth + ' 0'
        arrow.style.opacity = opacity
    })
}

const moveSlider = () =>{
   const sliderinput = document.querySelector('#slider-input')
   const sliderValue = sliderinput.value

   if(sliderValue == 0){
    // bodyBackgroundColor, strokeWidth, svgFill, opacity, lineColor, borderRadius, boxBackgroundColor, pillBackgroundColor
        addTheme('white', '12px', null, 1, 'rgb(38, 38, 38)','100px', 'white', null)
   }
   if(sliderValue > 1 && sliderValue <= 3){
        addTheme('white', '2px', 'white', 0.5, null, '75px', null, 'white' ) 
   }
   if(sliderValue >= 4 && sliderValue <= 6){
        addTheme('white', '1px', 'white', 0.5, null, '90px', null, 'white')
   }
   if(sliderValue >= 7 && sliderValue < 9){
        addTheme('white', '2px', 'white', 0.5, 'rgb(38,38,38', '50px', null, 'white')
   }
   if(sliderValue == 10){
        addTheme('rgb(38,38,38', '12px', 'white', 1, 'black', 0, transparent, 'white')
   }
   console.log(sliderValue)
}

sliderInput.addEventListener('input', moveSlider)

const changePalette = () =>{
    BigX.classList.add('pulse')

    if(paletteIndex >= 2){
        paletteIndex = 0
    } else{
        paletteIndex++
    }
    moveSlider()
    setTimeout(()=> BigX.classList.remove('pulse'), 500)
}

x_box.addEventListener('click', changePalette)
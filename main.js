const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs'
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk'
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147'
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145'
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany'
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Jonesy', trackingNumber: '8081baz'
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Justin',
    trackingNumber: 'suz2367'
}]


// let truePackages = packages.filter (package => packages.heavy == 'true' || packages.heavy == 'false')
// let falsePackages = packages.filter (package => packages.priority == 'true' || packages.priority == 'false')

function drawAll() {
    let template = ''
    for (let i = 0; i < packages.length; i++) {
        const package = packages[i];
        template += `<li> Is package heavy? ${package.heavy}: Is package priority? ${package.priority}: Is package fragile? ${package.fragile}: Recipient- ${package.to}: Tracking Number- ${package.trackingNumber} </li>`
        console.log('packages')
    }


    document.getElementById('packages').innerHTML = template
}


function filterHeavy() {
    let heavyPackages = packages.filter(package => package.heavy == true)
    let template = ''
    for (let i = 0; i < heavyPackages.length; i++) {
        const package = heavyPackages[i];
        template += `<li> Is package heavy? ${package.heavy}:
         Is package priority? ${package.priority}: 
         Is package fragile? ${package.fragile}: 
         Recipient- ${package.to}: 
         Tracking Number- ${package.trackingNumber} </li>`
        console.log('packages')
    }
    document.getElementById('packages').innerHTML = template
}

function filterLight() {
    let lightPackages = packages.filter(package => package.heavy == false)
    let template = ''
    for (let i = 0; i < lightPackages.length; i++) {
        const package = lightPackages[i];
        template += `<li> Is package heavy? ${package.heavy}: 
        Is package priority? ${package.priority}: I
        s package fragile? ${package.fragile}: 
        Recipient- ${package.to}: T
        racking Number- ${package.trackingNumber} </li>`
        console.log('packages')
    }
    document.getElementById('packages').innerHTML = template
}

function filterPriority() {
    let priorityPackages = packages.filter(package => package.priority == true)
    let template = ''
    for (let i = 0; i < priorityPackages.length; i++) {
        const package = priorityPackages[i];
        template += `<li> Is package heavy? ${package.heavy}: 
        Is package priority? ${package.priority}: 
        Is package fragile? ${package.fragile}: 
        Recipient- ${package.to}: T
        racking Number- ${package.trackingNumber} </li>`
        console.log('packages')
    }
    document.getElementById('packages').innerHTML = template
}

function filterLowPriority() {
    let lowPriorityPackages = packages.filter(package => package.priority == false)
    let template = ''
    for (let i = 0; i < lowPriorityPackages.length; i++) {
        const package = lowPriorityPackages[i];
        template += `<li> Is package heavy? ${package.heavy}:
         Is package priority? ${package.priority}: 
         Is package fragile? ${package.fragile}: 
         Recipient- ${package.to}: 
         Tracking Number- ${package.trackingNumber} </li>`
        console.log('packages')
    }
    document.getElementById('packages').innerHTML = template
}

function filterFragile() {
    let fragilePackages = packages.filter(package => package.priority == true)
    let template = ''
    for (let i = 0; i < fragilePackages.length; i++) {
        const package = fragilePackages[i];
        template += `<li> Is package heavy? ${package.heavy}: 
        Is package priority? ${package.priority}: 
        Is package fragile? ${package.fragile}: 
        Recipient- ${package.to}: 
        Tracking Number- ${package.trackingNumber} </li>`
        console.log('packages')
    }
    document.getElementById('packages').innerHTML = template
}

function filterInvincible() {
    let invinciblePackages = packages.filter(package => package.priority == false)
    let template = ''
    for (let i = 0; i < invinciblePackages.length; i++) {
        const package = invinciblePackages[i];
        template += `<li> Is package heavy? ${package.heavy}: 
        Is package priority? ${package.priority}:
         Is package fragile? ${package.fragile}:
          Recipient- ${package.to}: 
          Tracking Number- ${package.trackingNumber} </li>`
        console.log('packages')
    }
    document.getElementById('packages').innerHTML = template
}














// function filter(prop, bool) {
    // let lightPackages = packages.filter(package => package[prop] == bool)
    // let template = ''
    // for (let i = 0; i < lightPackages.length; i++) {
    //     const package = lightPackages[i];
    //     template += `<li> Is package heavy? ${package.heavy}: Is package priority? ${package.priority}: Is package fragile? ${package.fragile}: Recipient- ${package.to}: Tracking Number- ${package.trackingNumber} </li>`
    //     console.log('packages')
    // }
    // document.getElementById('packages').innerHTML = template
// }
// drawAll()
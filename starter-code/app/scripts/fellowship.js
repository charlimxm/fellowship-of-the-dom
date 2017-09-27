console.log("Linked.");
$(function() {
  // Dramatis Personae
  var hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'
  ];

  var buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
  ];

  var lands = ['The Shire', 'Rivendell', 'Mordor'];

  // var body = document.querySelector('body');
  var $body = $('body');

  // Part 1

  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  function makeMiddleEarth() {

    var $middleEarth = $('<section id = "middle-earth">')
    var landArr = lands.map(function(land) {
      console.log("land", land)
      var landArticle = $(`
        <article>
          <h1>${land}</h1>
        </article>`

      )

      return landArticle

    })

    // console.log(landArr)

    $middleEarth.append(landArr)
    $body.append($middleEarth)

  }

  makeMiddleEarth();


  // Part 2

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  function makeHobbits() {
    // var theShire = $("article: nth-child(1)")
    var theShire = $('article').first()
    var $hobbitList = $('<ul>')

    var hobbitsArr = hobbits.map(function(hobbit) {
      var $hobbitList = $('<li>').text(hobbit)
      $hobbitList.addClass('hobbit')
      return $hobbitList

    })

    $hobbitList.append(hobbitsArr)
    theShire.append($hobbitList)

  }

  makeHobbits()

  // Part 3

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

  var theRing = $('<div>');
  theRing.attr('id', 'the-ring');
  theRing.addClass("magic-imbued-jewelry")

  function keepItSecretKeepItSafe() {

    // var theRing = $('<div>');
    // theRing.attr('id', 'the-ring');
    // theRing.addClass("magic-imbued-jewelry")

    theRing.on('click', nazgulScreech)

    var frodo = $('.hobbit').first()
    frodo.append(theRing)

  }

  keepItSecretKeepItSafe()

  // Part 4

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  function makeBuddies() {

    var aside = $('<aside>');
    var rivendell = $('article').first().next()
    // console.log(rivendell)
    var $buddyList = $('<ul>')

    var buddiesArr = buddies.map(function(buddy) {
      var $buddyList = $('<li>').text(buddy)
      return $buddyList

    })

    $buddyList.append(buddiesArr)
    aside.append($buddyList);
    rivendell.append(aside);

  }

  makeBuddies()

  // Part 5

  // change the 'Strider' textnode to 'Aragorn'

  function beautifulStranger() {

    var strider = $('aside ul li').last().prev()
    // console.log(strider)

    strider.text('Aragorn')

  }

  beautifulStranger()

  // Part 6

  // assemble the hobbits and move them to Rivendell

  function leaveTheShire() {

    var theShire = $('article ul li')
    console.log(theShire)
    var rivendell = $('aside ul')
    console.log(rivendell)

    theShire.appendTo(rivendell)

  }

  leaveTheShire()

  // Part 7

  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party


  function forgeTheFellowShip() {

    var theFellowship = $('<div>')
    theFellowship.attr('id', 'the-fellowship')
    var rivendell = $('article').first().next()
    console.log(rivendell)
    var members = $('aside ul li')
    console.log(members)

    var theFellowshipArr = members.map(function(member) {
      console.log(member)
      // alert(member.text())
      // for(var i = 0; i < members.length; i++)
        // alert(member.text() + ' has joined the fellowship!');
    })

    rivendell.append(theFellowshipArr)
    rivendell.insert(rivendell)

  }

  forgeTheFellowShip()

  // Part 8

  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  function theBalrog() {
    var members = $('aside ul li')
    var gandalf = members[0];
    // var gandalf = $('aside ul li').first()
    console.log(gandalf)

    gandalf.text('Gandalf the White')
    gandalf.css('border', '3px solid slategrey')
    gandalf.css('backgroundColor', 'white')

}

theBalrog();



  // Part 9

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  function hornOfGondor() {

    var boromir = fellowshipMembers.eq[8]

    alert('the horn of gondor has blown')
    boromir.css('text-decoration', 'line-through')
    alert('Boromir\'s been killed by the Uruk-hai!')
    rivendell.append(boromir)

  }


  // Part 10

  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

  function itsDangerousToGoAlone(){
    var frodo = members.eq[0]
    var sam = members.eq[1]

    mordor.append(frodo)
    mordor.append(sam)

    var mountDoom = $('<div>')
    mountDoom.attr('id', 'mount-doom')
    mordor.append(mountDoom)
  }


  // Part 11

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

  function weWantsIt() {

    var gollum = $('<div>')
    gollum.attr('id', 'gollum')
    var mordor = $('article').last()
    console.log(mordor)
    theRing = frodo.find('#the-ring').eq[0]

    (gollum).append(theRing)
    (mordor).append(gollum)

  }


  // Part 12

  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  function thereAndBackAgain() {

    gollum.remove()

    var hobbitUL = $('<ul>')
    var hobbits = $('.hobbit')


    for(var i = 0; i < members.length; i++)
    (hobbitUL).append(hobbits.eq[i])
    (theShire).append(hobbitUL)
  }

})

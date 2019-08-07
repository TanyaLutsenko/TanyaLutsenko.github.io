$('.filter__select').chosen();

var content = {
    "posts": [
        {
            "name": "SEO Review and Reccomendations",
            "options": {
                "fixed": "Regular",
                "budget": 300,
                "delivery": "Urgent",
                "posted": "12 minutes ago",
                "ends": "14d, 23h",
                "proposals": 0
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
            "category": "Search Engine",
            "skills": [
                {
                    "id": 1,
                    "name": "net-framework"
                },
                {
                    "id": 2,
                    "name": "рhp"
                }
            ],
            "client": {
                "country": "United states",
                "rating": 4.8
            }
        },
        {
            "name": "SEO Review and Reccomendations",
            "options": {
                "fixed": "Regular",
                "budget": 300,
                "delivery": "Urgent",
                "posted": "12 minutes ago",
                "ends": "14d, 23h",
                "proposals": 0
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
            "category": "Search Engine",
            "skills": [
                {
                    "id": 1,
                    "name": "net-framework"
                },
                {
                    "id": 2,
                    "name": "рhp"
                }
            ],
            "client": {
                "country": "United states",
                "rating": 4.8
            }
        }
    ]
}


for (i = 0; i < content.posts.length; i++) {
    var post = content.posts[i];
    var div = document.createElement('div');
    div.className = "block";

    var title = document.createElement('div');
    title.className = "name";

    var span = document.createElement('span');
    span.className = "seo__color";

    span.innerHTML = post.name;

    document.getElementById('content').append(div);
    document.getElementById('content').append(title);
    document.getElementById('content').append(span);

    div.appendChild(title);
    title.appendChild(span);


    var optionsBlock = document.createElement('div');
    optionsBlock.className = "options";

    document.getElementById('content').append(optionsBlock);

    div.appendChild(optionsBlock);

    createOption("Fixed:", post.options.fixed, optionsBlock);
    createOption("Budget:", "$" + post.options.budget, optionsBlock);
    createOption("Delivery:", post.options.delivery, optionsBlock);
    createOption("Posted:", post.options.posted, optionsBlock);
    createOption("Ends:", post.options.ends, optionsBlock);
    createOption(post.options.proposals + " Proposals", null, optionsBlock);

    var description = document.createElement('div');
    description.className = "description";
    description.innerText = post.description;

    document.getElementById('content').append(description);
    div.appendChild(description);


    var categoriesBlock = document.createElement('div');
    categoriesBlock.className = "categories";

    document.getElementById('content').append(categoriesBlock);

    div.appendChild(categoriesBlock);

    createCategory("Category:", post.category, categoriesBlock);

    for (j = 0; j < post.skills.length; j++) {
        createCategory(post.skills[j].name, null, categoriesBlock);
    }

    createClient(post, div);
}


function createOption(key, value, optionsBlock) {
    var option = document.createElement('div');
    option.className = "option";

    var underlineText = document.createElement('span');

    if (value === null) {
        underlineText.className = "underline__text2";
    } else {
        underlineText.className = "underline__text";
    }

    underlineText.innerHTML = key;

    var span = document.createElement('span');
    span.innerHTML = value;

    document.getElementById('content').append(option);
    document.getElementById('content').append(underlineText);
    document.getElementById('content').append(span);

    option.appendChild(underlineText);
    option.appendChild(span);
    optionsBlock.appendChild(option);
}

function createCategory(key, value, categoriesBlock) {
    var category = document.createElement('div');
    category.className = "category";

    var underlineText = document.createElement('span');
    underlineText.className = "underline__text";
    underlineText.innerHTML = key;

    var span = document.createElement('span');
    span.innerHTML = value;

    document.getElementById('content').append(category);
    document.getElementById('content').append(underlineText);
    document.getElementById('content').append(span);

    category.appendChild(underlineText);
    category.appendChild(span);
    categoriesBlock.appendChild(category);
}

function createClient(post, block) {
    var client = document.createElement('div');
    client.className = "client";

    var country = document.createElement('div');
    country.className = "country";

    var span = document.createElement('span');
    span.className = "underline__text";
    span.innerHTML = "Client:";

    var span2 = document.createElement('span');
    span2.innerHTML = post.client.country;

    var rating = document.createElement('div');
    rating.className = "rating";

    var span3 = document.createElement('span');
    span3.className = "text__bold";
    span3.innerHTML = post.client.rating;

    document.getElementById('content').append(client);
    document.getElementById('content').append(country);
    document.getElementById('content').append(span);
    document.getElementById('content').append(span2);
    document.getElementById('content').append(span3);

    client.appendChild(country);
    client.appendChild(rating);

    country.appendChild(span);
    country.appendChild(span2);
    rating.appendChild(span3);

    block.appendChild(client);
}

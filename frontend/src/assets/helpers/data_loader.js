

async function cait_to_json(path_to_directory, total_emissions_csv, emissions_by_category_csv, countries)     //emissions_by_category_csv should be an array of the names all csv files you want to load
{
    let emissions_by_category = [];
    let total_emissions;

    await fetch(path_to_directory + total_emissions_csv)
            .then(response => response.text())
            .then(text => total_emissions = text);

    //load the .csv files into emissions_by_category
    for(let i = 0; i < emissions_by_category_csv.length; i++)
    {
        await fetch(path_to_directory + emissions_by_category_csv[i])
            .then(response => response.text())
            .then(text => emissions_by_category.push(text));
    }



    //split the csv so its usable
    for(let i = 0; i < emissions_by_category.length; i++)
    {
        emissions_by_category[i] = emissions_by_category[i].split(/\r?\n/);
        for(let j = 0; j < emissions_by_category[i].length; j++)
        {
            emissions_by_category[i][j] = emissions_by_category[i][j].split(',');
        }
    }

    
    total_emissions = total_emissions.split(/\r?\n/);
    for(let i = 0; i < total_emissions.length; i++)
    {
        total_emissions[i] = total_emissions[i].split(',');
    }
    

    let country_data = [];

    //creating the json objects of each country specified
    countries.forEach(country =>
    {
        country_data.push(
            {
                name:          country,
                total_emissions: 0,
                co2_emissions: []
            }
        )
    });

    //adding 'Others' category
    country_data.push(
        {
            name: 'Others',
            total_emissions: 0,
            co2_emissions: []
        }
    );

    //determening the total emissions for each country and 'Others'
    for(let country = 0; country < total_emissions.length; country++)
    {
        let is_contained = false;
        let index;
        for(let i = 0; i < countries.length; i++)
        {
            //print(total_emissions[country][total_emissions[0].length - 1])
            if(total_emissions[country][0] === country_data[i].name)
            {
                is_contained = true;
                index = i;
                break;
            }

        }
            
        if(is_contained)
        {
            country_data[index].total_emissions = parseFloat(total_emissions[country][total_emissions[0].length - 1]); 
        }
        else
        {
            let other_data = total_emissions[country][total_emissions[0].length - 1];
            if(!(other_data === undefined || other_data === null || other_data === 'false'  ))
            {
                country_data[country_data.length - 1].total_emissions += parseFloat(other_data);
            }
        }
    }


    //putting the emissions into the co2_emissions array of each country, adding them up for 'Others'
    //categories of emissions in the array appear in the order in which the csv files were given to the function
    for(let category = 0; category < emissions_by_category.length; category++)
    {
        country_data[country_data.length - 1].co2_emissions.push(0);
        for(let country = 0; country < emissions_by_category[0].length; country++)
        {
            let is_contained = false;
            let index;
            for(let i = 0; i < countries.length; i++)
            {
                //print(total_emissions[country][total_emissions[0].length - 1])
                if(emissions_by_category[category][country][0] === country_data[i].name)
                {
                    is_contained = true;
                    index = i;
                    break;
                }

            }
            if(is_contained)
            {
                
                country_data[index].co2_emissions[category] = parseFloat(emissions_by_category[category][country][emissions_by_category[0][0].length - 1]);
                
            }
            else
            {
                let other_data = emissions_by_category[category][country][emissions_by_category[0][0].length - 1];
                if(!(other_data === undefined || other_data === null || other_data === 'false'  ))
                {
                    country_data[country_data.length - 1].co2_emissions[category] += parseFloat(other_data);
                    
                }
            }
        }
    }

    return country_data;
}

export default cait_to_json;
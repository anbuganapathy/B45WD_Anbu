let getPostOfficeDetails = () => {
  let pincode = document.getElementById("floatingInput").value;
  let promise1 = new Promise((resolve, reject) => {
    let data = fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    resolve(data);
    reject(err);
  });
  promise1
    .then((data) => data.json())
    .then((res) => {
      let noOfResults = res[0].Message;
      //   console.log(noOfResults);
      let searchResult = document.getElementById("pincodeSearchResult");
      searchResult.innerText = "";
      document.body.append(searchResult);

      //No. of Pincodes found in the search result
      let h4 = document.createElement("h4");
      h4.setAttribute("class", "noOfPincodes");
      h4.innerText = noOfResults;
      searchResult.append(h4);

      let searchDetails = Object.values(res[0].PostOffice);
      console.log("searchDetails", searchDetails);

      //Div - Card row
      let cardRow = document.createElement("div");
      cardRow.setAttribute("class", "row");
      searchResult.append(cardRow);

      searchDetails.forEach((element) => {
        //Div - Card Col
        let cardCol = document.createElement("div");
        cardCol.setAttribute("class", "col-sm-4 mb-3 mb-sm-0");
        cardRow.append(cardCol);

        //Div Card
        let card = document.createElement("div");
        card.setAttribute("class", "card border-secondary mb-3");
        cardCol.append(card);

        //Div Card Header - Post Office Name
        let cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header");
        cardHeader.innerHTML = `<h4>${element.Name}</h4>`;
        card.append(cardHeader);

        //Div Card Body
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        card.append(cardBody);

        //Card Text -- Other Post Office details
        let otherDetails = document.createElement("h6");
        otherDetails.setAttribute("class", "card-subtitle mb-2 text-body-secondary");
        otherDetails.innerHTML = `<h5>Post Office Details</h5>`;
        cardBody.append(otherDetails);

        let block1 = document.createElement("p");
        block1.setAttribute("class", "block");
        block1.innerHTML = `Block: ${element.Block}`;
        cardBody.append(block1);

        let branchType = document.createElement("p");
        branchType.setAttribute("class", "branchType");
        branchType.innerHTML = `Branch Type: ${element.BranchType}`;
        cardBody.append(branchType);

        let circle1 = document.createElement("p");
        circle1.setAttribute("class", "circle");
        circle1.innerHTML = `Circle: ${element.Circle}`;
        cardBody.append(circle1);

        let country = document.createElement("p");
        country.setAttribute("class", "country");
        country.innerHTML = `Country: ${element.Country}`;
        cardBody.append(country);

        let deliveryStatus = document.createElement("p");
        deliveryStatus.setAttribute("class", "deliveryStatus");
        deliveryStatus.innerHTML = `Delivery Status: ${element.DeliveryStatus}`;
        cardBody.append(deliveryStatus);

        let district = document.createElement("p");
        district.setAttribute("class", "district");
        district.innerHTML = `District: ${element.District}`;
        cardBody.append(district);

        let division = document.createElement("p");
        division.setAttribute("class", "division");
        division.innerHTML = `Division: ${element.Division}`;
        cardBody.append(division);

        let pincode = document.createElement("p");
        pincode.setAttribute("class", "pincode");
        pincode.innerHTML = `Pincode: ${element.Pincode}`;
        cardBody.append(pincode);

        let region = document.createElement("p");
        region.setAttribute("class", "region");
        region.innerHTML = `Region: ${element.Region}`;
        cardBody.append(region);

        let state = document.createElement("p");
        state.setAttribute("class", "state");
        state.innerHTML = `State: ${element.State}`;
        cardBody.append(state);
      });
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
};

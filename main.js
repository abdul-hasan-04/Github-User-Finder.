const searchForm = document.querySelector("form");
const searchUserValue = document.querySelector(".input-field");
const exploreSectionContainer = document.querySelector(".exploring-section");
const loadingElement = document.querySelector(".spinner");
const cardUi = document.querySelector(".user_card");
let errorContainer = document.querySelector(".error-container");
const erroMessagElement = document.querySelector(".error-message");
let fieldErrorHandler = document.querySelector(".error-displayer");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSearchingField();
});

const handleSearchingField = () => {
  let userValue = searchUserValue.value.trim();
  fieldErrorHandler.textContent = "";
  if (!userValue) {
    fieldErrorHandler.textContent = "This field is required.";
    return;
  }

  findSearchUser(userValue);
};

async function findSearchUser(user_Value) {
  showLoading();
  hideExplore();
  hideCardUi();
  hideErrorMessage();

  try {
    const request = await fetch(`https://api.github.com/users/${user_Value}`);
      if (!request.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
        if (request.status === 404) {
          throw new Error("User not found. Check the username and try again.");
        }
      }

      const user = await request.json();
      displayBasicUserCardInfo(user);
    } catch (error) {
      showErrorMessage();
      ErrorMessageAlert(error.message);
    } finally {
      hideLoading();
    }
 
}
// solo functions //

const hideErrorMessage = () => {
  errorContainer.classList.remove("active");
};
const hideCardUi = () => {
  cardUi.classList.remove("active");
};
const hideExplore = () => {
  exploreSectionContainer.classList.add("hide");
};
const hideLoading = () => {
  loadingElement.classList.remove("active");
};

// show on features //

const showLoading = () => {
  loadingElement.classList.add("active");
};
const showCardUi = () => {
  cardUi.classList.add("active");
};
const showExplore = () => {
  exploreSectionContainer.classList.remove("hide");
};
const showErrorMessage = () => {
  errorContainer.classList.add("active");
};

const ErrorMessageAlert = (message) => {
  erroMessagElement.textContent = message;
};

const displayBasicUserCardInfo = (user) => {
  let userProfileImage = document.querySelector(".avatar");
  let userFullName = document.querySelector("#fullName");
  let userName = document.querySelector("#username");
  let userBioData = document.querySelector(".profile-bio");

  showCardUi();
  userProfileImage.src = user.avatar_url || "no image was found.";
  userFullName.textContent = user.login || "full-name was not provided";
  userName.textContent = user.name || "no user-name was found.";
  userBioData.textContent = user.bio || "no bio was shared.";

  displaySecondaryInfo(user);
};

const displaySecondaryInfo = (user) => {
  const metaProfileData = document.querySelector(".profile-meta");
  let statsGrid = document.querySelector(".stats-grid");
  let metaData = [];

  if (user.location) {
    metaData.push(`  <span>${user.location}</span>`);
  }
  if (user.email) {
    metaData.push(`  <span>📧 ${user.email}</span>`);
  }
  if (user.blog) {
    metaData.push(`  <span>🛜 ${user.blog}</span>`);
  }
  if (user.company) {
    metaData.push(`  <span>💼${user.company}</span>`);
  }

  metaProfileData.innerHTML = metaData.map((user) => user).join("");

  diplayFurtherInfo(user);
};

const diplayFurtherInfo = (userdata) => {
  let statusGridElement = document.querySelector(".stats-grid");
  let linksContainer = document.querySelector(".action-buttons");

  let statusArray = [
    {
      label: Object.keys(userdata).find((key) => key == "followers"),
      value: userdata.followers,
    },
    {
      label: Object.keys(userdata).find((key) => key == "following"),
      value: userdata.following,
    },
    {
      label: Object.keys(userdata).find((key) => key == "public_repos"),
      value: userdata.public_repos,
    },
    {
      label: Object.keys(userdata).find((key) => key == "public_gists"),
      value: userdata.public_gists,
    },
  ];

  let linksArray = [
    { viewProfile: userdata.html_url, viewRepos: `https://github.com/${userdata.login}?tab=repositories` },
  ];
  statusGridElement.innerHTML = statusArray
    .map(
      (data) =>
        ` <div class="grid">
        <span class="value">${data.value}</span>
        <span class="label">${data.label}</span>
      </div>`,
    )
    .join("");

  linksContainer.innerHTML = linksArray.map(
    (link) => `
    <a id="profileLink"class="action-btn primary"target="_blank"rel="noopener" href ="${link.viewProfile}">View Profile</a>
    <a id="reposLink" class="action-btn" target="_blank" rel="noopener" href ="${link.viewRepos}">View Repositories</a>
  `,
  ).join("");

};

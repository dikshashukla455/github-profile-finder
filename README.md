# github-profile-finder
fetching the Github API for displaying the user's profile and repositories.

This project contains four components : Profile, Repositories, Pagination, Loader.

Tech Stack : Reactjs, MaterialUI, Github API.

# Profile:
This component contains the data of the user's profile (like : name, email, followers, image, bio)

# Repositories:
This component contains the data of each repositories in form of card containing name, description, languages and topics.

# Loader:
This component contains the skeleton loader of profile and repositories.
in profile,the skeleton will display while calling the api it depends upon the internet speed at sometimes it can't be visible due to fast connection . so, In repository, I have add skeleton loader for 0.5s by using settimeout method.

# Unit tests:

![Screenshot (953)](https://user-images.githubusercontent.com/60606998/154247213-8c295b6a-7426-4d13-9e43-e3180339321d.png)

Unit tests of Profile and Repository component.

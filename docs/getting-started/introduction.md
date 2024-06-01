---
title: Introduction
---

# Introduction

Redot Dashboard is a Scaffold for building a Laravel applications with a modern UI. It is built on top of Tabler, a popular open-source admin dashboard template for Bootstrap, and includes a set of Laravel components that make it easy to build custom admin panels or an entire web application.

## Requirements

Redot Dashboard has a few requirements you should be aware of before installing:

- PHP >= 8.2
- Laravel >= 11.x
- MySQL >= 5.7

And that's it! You're ready to get started.

## Installation

To install Redot Dashboard, you should gain access to the source code by purchasing a license from [RedotHub](https://redothub.com/access-requests/create). Once you have access to the source code, you can install it by following the steps below:

1. Download the source code from RedotHub.
2. Unzip the source code into your project directory.
3. Install the dependencies by running `composer install`.
4. Configure your environment variables in the `.env` file.
5. Run the migrations by running `php artisan migrate --seed`.
6. Start the development server by running `php artisan serve`.

That's it! You should now be able to access the dashboard by visiting `http://127.0.0.1:8000` in your browser.

## Default Credentials

Redot Dashboard comes with a default admin user that you can use to log in:

- Email: `admin@email.com`
- Password: `password`

You can change these credentials by updating the `admins` table in the database.

## Next Steps

Now that you have Redot Dashboard installed, you can start customizing it to fit your needs. You can add new pages, components, and functionality to the dashboard by following the documentation.
## Table of Content
[1. Main Features](#Main)  
[2. Components & Services Inheritance Structure](#Components)  
[3. Project Structure](#Project)  

<a name="Main"/>

## Project Demo

<a name="Components"/>

## Components & Services Inheritance Structure
I developed the inheritance structure when I refactored the system to improve the extensibility and reusability. The base classes with generic types are used to capture common functionalities to reduce redundant code. In the figure below, I have <b>Customer</b> CRUD screen as an example. However, this also applies to other models such as <b>Contract</b>. 

* <b>DataService</b> and <b>TableService</b> are base classes for the services of the model.
* All model classes need to extend <b>HasIdInterface</b>.
* <b>XXXHomeComponent</b> contains <b>XXXCreateComponent</b>, <b>XXXTableComponent</b>, <b>XXXEditComponent</b>, and <b>XXXCustomerDeleteComponent</b>. Each of which has the corresponding base class to extend. <b>XXX</b> refers to the model name, e.g. Customer, Contract, etc.


<img src="docs/inheritance_diagram.png">

<a name="Project"/>

## Project Structure
The project consists four main modules <b>app/admin</b>, <b>app/auth</b>, <b>app/client</b>, and <b>app/shared</b>.
<ul>
  <li><b>app/admin</b> contains code to implement the CRUD screen for customers/parking-lots/contracts, dashboard, settings, and report generation </li>
  <li><b>app/auth</b> contains code to implement the features for user registration/login, change/forget/reset Paassword</li>
  <li><b>app/client</b> has no content becasue the system currently does not support access to the customer</li>
  <li><b>app/shared</b> contains shared components/models/directives/pipes/services/utility classes</li>
</ul>

Free feel to explore the content of the directory by clicking the hyperlinks.

<a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src">src</a><br>
	├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/">app</a><br>
	│   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/">admin</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/">contract</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/">components</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/contract-create/">contract-create</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/contract-delete/">contract-delete</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/contract-edit/">contract-edit</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/contract-home/">contract-home</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/contract-table/">contract-table</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/payment-create/">payment-create</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/payment-edit/">payment-edit</a><br>
	│   │   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/components/payment-table/">payment-table</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/models/">models</a><br>
	│   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/contract/services/">services</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/">customer</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/components/">components</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/components/customer-create/">customer-create</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/components/customer-delete/">customer-delete</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/components/customer-edit/">customer-edit</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/components/customer-home/">customer-home</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/components/customer-search/">customer-search</a><br>
	│   │   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/components/customer-table/">customer-table</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/models/">models</a><br>
	│   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/customer/services/">services</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/">dashboard</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/components/">components</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/components/active-parking-lot-table/">active-parking-lot-table</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/components/active-payment-table/">active-payment-table</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/components/dashboard-home/">dashboard-home</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/components/income-graph/">income-graph</a><br>
	│   │   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/components/payment-calendar/">payment-calendar</a><br>
	│   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/dashboard/services/">services</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/home/">home</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/income/">income</a><br>
	│   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/income/components/">components</a><br>
	│   │   │   &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/income/components/income-home/">income-home</a><br>
	│   │   │   &nbsp;&nbsp;&nbsp; └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/income/components/income-table/">income-table</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/navbar/">navbar</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/">parking</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/">components</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-area-create/">parking-area-create</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-area-delete/">parking-area-delete</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-area-edit/">parking-area-edit</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-home/">parking-home</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-lot-create/">parking-lot-create</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-lot-delete/">parking-lot-delete</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-lot-edit/">parking-lot-edit</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-lot-search/">parking-lot-search</a><br>
	│   │   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-lot-table/">parking-lot-table</a><br>
	│   │   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/components/parking-table/">parking-table</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/models/">models</a><br>
	│   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/parking/services/">services</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/report/">report</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/report/components/">components</a><br>
	│   │   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/report/components/report-home/">report-home</a><br>
	│   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/report/services/">services</a><br>
	│   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/setting/">setting</a><br>
	│   │   &nbsp;&nbsp;&nbsp; └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/setting/components/">components</a><br>
	│   │   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/setting/components/setting-change-password/">setting-change-password</a><br>
	│   │   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/setting/components/setting-customer-token/">setting-customer-token</a><br>
	│   │   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/setting/components/setting-home/">setting-home</a><br>
	│   │   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/admin/setting/components/setting-tabset/">setting-tabset</a><br>
	│   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/">auth</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/components/">components</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/components/auth-home/">auth-home</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/components/login/">login</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/components/no-access/">no-access</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/components/password-change/">password-change</a><br>
	│   │   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/components/password-reset/">password-reset</a><br>
	│   │   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/components/register/">register</a><br>
	│   │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/models/">models</a><br>
	│   │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/auth/services/">services</a><br>
	│   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/client/">client</a><br>
	│   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/">shared</a><br>
	│   &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/components/">components</a><br>
	│   &nbsp;&nbsp;&nbsp; │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/components/error-handler/">error-handler</a><br>
	│   &nbsp;&nbsp;&nbsp; │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/components/page-loading/">page-loading</a><br>
	│   &nbsp;&nbsp;&nbsp; │   ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/components/timepicker/">timepicker</a><br>
	│   &nbsp;&nbsp;&nbsp; │   └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/components/toast-messages/">toast-messages</a><br>
	│   &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/directives/">directives</a><br>
	│   &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/models/">models</a><br>
	│   &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/pipe/">pipe</a><br>
	│   &nbsp;&nbsp;&nbsp; ├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/services/">services</a><br>
	│   &nbsp;&nbsp;&nbsp; └── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/app/shared/util/">util</a><br>
	├── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/assets/">assets</a><br>
	└── <a href="https://github.com/ianyehwork/Contract-Management-Client-Angular/tree/master/src/environments/">environments</a><br>

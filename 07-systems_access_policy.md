---
nav_order: 7
last_modified_date: Fri Jan 7 17:48:30 2022 -0800
---

# 7. System Access Policy

Access to Luma platform is limited for all users, including but not limited to workforce members, volunteers, business associates, contracted providers, consultants, and any other entity, is allowable only on a minimum necessary basis. All users are responsible for reporting an incident of unauthorized user or access of the Luma platform. These safeguards have been established to address the HIPAA Security regulations including the following:

## 7.1 Applicable Standards

### 7.1.1 Applicable Standards from the HITRUST Common Security Framework

* 01.d - User Password Management
* 01.f - Password Use
* 01.r - Password Management System
* 01.a - Access Control Policy
* 01.b - User Registration
* 01.h - Clear Desk and Clear Screen Policy
* 01.j - User Authentication for External Connections
* 01.q - User Identification and Authentication
* 01.v - Information Access Restriction
* 02.i - Removal of Access Rights
* 06.e - Prevention of Misuse of Information Assets

### 7.1.2 Applicable Standards from the HIPAA Security Rule

* 164.308a4iiC Access Establishment and Modification
* 164.308a3iiB Workforce Clearance Procedures
* 164.308a4iiB Access Authorization
* 164.312d Person or Entity Authentication
* 164.312a2i Unique User Identification
* 164.308a5iiD Password Management
* 164.312a2iii Automatic Logoff
* 164.310b Workstation Use
* 164.310c Workstation Security
* 164.308a3iiC Termination Procedures

## 7.2 Access Establishment and Modification

1. Requests for access to Luma production systems is made formally using the following process:
   1. A Luma workforce member initiates the access request via a form entitled "Permission Request" in a Slack Workflow which then automatically creates a ticket in our task tracking software, ClickUp. 
     * User identities must be verified prior to granting access to new accounts.
     * Identity verification uses Google's two-factor authentication.
     * For new accounts, the method used to verify the user's identity must be recorded on the Issue.
     * If a user requires a change in Access Rights, such as in the event of a role change, a Tangelo workflow is initiated so that relevant Account Managers are informed and can make any required permissions changes.
   1. The workforce member's direct manager will indicate on the request that it has their approval and is pertinent to the employee's job function.
   1. The Head of Engineering or his/her representative under the auspices of the Security Officer or Privacy Officer will grant access to systems as dictated by the employee's job title. If additional access is required outside of the minimum necessary to perform job functions, the requester must include a description of why the additional access is required as part of the access request.
   1. Once the review is completed, the Security Officer or Privacy Officer or a representative approves or rejects the request. If the request is rejected, it goes back for further review and documentation.
   1. If the review is approved, the Security Officer or Privacy Officer confirms this on the request, adding any pertinent notes required. The Security Officer or Privacy Officer or a representative then grants requested access.
     * New accounts will be created with a temporary secure password that meets all requirements from [??7.12](#712-password-management), which must be changed on the initial login.
     * All password exchanges must occur over an authenticated channel.
     * Users are required to acknowledge receipt of passwords - this can be done over instant messaging (Slack etc), e-mail, voice call or SMS message.
     * For non-production systems, access grants are accomplished by leveraging the access control mechanisms built into those systems. Account management for non-production systems may be delegated to a Luma employee at the discretion of the Security Officer or Privacy Officer.
1. Access is not granted until receipt, review, and approval by the Luma Security Officer or Privacy Officer or a representative;
1. Access is 'deny-all' by default.
1. The request for access is retained for future reference.
1. All access to Luma production systems are reviewed and updated on a bi-annual basis to ensure proper authorizations are in place commensurate with job functions. The process for conducting reviews is outlined below:
   1. The Security Officer initiates the review of user access after notification from the shared Information Security calendar and creates an issue in ClickUp. 
   1. The Security Officer is assigned to review levels of access for each Luma workforce member.
   1. If user access is found during review that is not in line with the least privilege principle, the process below is used to modify user access and notify the user of access changes. Once those steps are completed, the Issue is then reviewed again.
   1. Once the review is completed, the Security Officer approves or rejects the Issue. If the Issue is rejected, it goes back for further review and documentation.
   1. If the review is approved, the Security Officer then marks the Issue as Done, adding any pertinent notes required.
   1. Review of user access is monitored on a quarterly basis using ClickUp reporting to assess compliance with above policy.
1. Any Luma workforce member can request change of access using the process outlined in [??7.2 paragraph 1](#72-access-establishment-and-modification).
1. Access to production systems is controlled using centralized user management and authentication provided by AWS.
1. A list of all workforce members with access to sensitive information is updated in MongoDB.
1. Temporary accounts are not used unless absolutely necessary for business purposes.
   * Accounts are reviewed every 90 days to ensure temporary accounts are not left unnecessarily.
   * Accounts that are inactive for over 90 days are disabled.
   * Accounts that are inactive are not issued to other users.
1. In the case of non-personal information, such as generic educational content, identification and authentication may not be required. This is the responsibility of Luma Customers to define, and not Luma.
1. Privileged users must first access systems using standard, unique user accounts before switching to privileged users and performing privileged tasks.
   * For production systems, this is enforced by creating non-privileged user accounts that must invoke `sudo` to perform privileged tasks.
   * Rights for privileged accounts are granted by the Security Officer or Privacy Officer using the process outlined in [??7.2 paragraph 1](#72-access-establishment-and-modification).
1. All application to application communication using service accounts is restricted and not permitted unless absolutely needed. Automated tools are used to limit account access across applications and systems.
1. Generic accounts are not allowed on Luma systems.
1. Where possible, systems that do not require elevated user permissions are used.
1. Automated system routines are used where possible to avoid granting permissions to users. 
1. Access is granted utilizing two-factor authentication, this includes and Remote Access.
    * Two-factor authentication is accomplished using a Time-based One-Time Password (TOTP) as the second factor.
    * sessions are automatically disconnected after 30 minutes of inactivity.
1. In cases of increased risk or known attempted unauthorized access, immediate steps are taken by the Security and Privacy Officer to limit access and reduce risk of unauthorized access.
1. Direct system to system, system to application, and application to application authentication and authorization are limited and controlled to restrict access.
1. Direct access to systems continaing ePHI is not possible as controlled by AWS and MongoDB Atlas. Backend access via SSH to a bastion layer is managed with granular, role-based API permissions and 2-factor authentication with FIDO U2F security key support.
1. User functionality is separated from information system management functionality. 
1. Access will only be provided to external parties, such as support personnel when it is absoloutly essential, and such access shall be approved be management, for a limited time only and be strictly monitored via existing processes.
1. Contractors are subject to the same controls as employees 
1. Different Account Types are identified, such as regular or administrative accounts and conditions for group and role membership are established. System Access and Group/Role Membership is always deny-all by default, providing only the minimum access required for job functions to be performed.
1. Access to the production infrastructure is limited and only possible after the employee has gotten verification of their business need, the completion of their HIPAA training, and their disk encryption.
 

## 7.3 Workforce Clearance

1. The level of security assigned to a user of the production platform is based on the minimum necessary amount of data access required to carry out legitimate job responsibilities assigned to a user's job classification and/or to a user needing access to carry out treatment, payment, or healthcare operations.
1. All access requests are treated on a "least-access principle."
1. Luma maintains a minimum necessary approach to access to Customer data. As such, Luma, including all workforce members, does not access any ePHI except out of necessity to address Customer issues. Select set of job roles are cleared to access ePHI specifically customer success, customer support, and engineering.
1. Customers can add additional users to their account for access to the messaging platform. It is the Customer's responsibility to verify appropriate access. Customer will be responsible to remove additional users.
1. Prior to employment, all workforce must verify the identity and legal authorization to work via an I-9 form.

## 7.4 Access Authorization

1. Role based access categories for each Luma system and application are pre-approved by the Security Officer, or an authorized delegate of the Security Officer.
1. Luma uses third party and internal tools, hardware, software and firewalls to segment data, prevent unauthorized access, and monitor traffic for denial of service attacks.
1. Luma does not permit the use of external public services, such as Instant Messaging and File Sharing without the approval of the Security Officer. Luma users can request such services for review via a Blissfully workflow, requiring business justification. 

## 7.5 Person or Entity Authentication

1. Each workforce member has and uses a unique user ID and password that identifies him/her as the user of the production  system and messaging platform.
1. Each Customer has and uses a unique user ID and password that identifies him/her as the user of the messaging platform.
1. All Customer support desk interactions must be verified before Luma support personnel will satisfy any request having information security implications.
   * Luma's current support desk software, Zendesk, requires users to authenticate before submitting support tickets.
   * Support issues submitted by email must be verified by Luma personnel using an email that has been registered with the corresponding account. This is cross referenced with email listed within Luma's system.
1. Authorized workforce members can impersonate Customer accounts for the purposes of updating settings and addressing Customer issues. This tool requires two-factor authentication and is logged as workforce access.
1. Identity of additional users added by the Customer to access the messaging platform will be verified by the Customer and not responsibility of Luma.

## 7.6 Unique User Identification

1. Access to the Luma platform is controlled by requiring unique User Login IDs and passwords for each individual user.
1. Passwords requirements mandate strong password controls (see below).
1. Passwords are not displayed at any time and are not transmitted or stored in plain text.
1. Shared accounts are not allowed within Luma systems.

## 7.7 Automatic Logoff

1. Users are required to make the platform inaccessible by any other individual when unattended by the users (ex. by using a password protected screen saver or logging off the system).
1. Messaging platform automatically log users off the systems after 15 minutes of inactivity.
1. The Security Officer pre-approves exceptions to automatic log off requirements.

## 7.8 Employee Workstation Use

All workstations at Luma are company owned, and all are laptop Apple products running Mac OSX or Linux or PCs running Windows.

1. Workstations may not be used to engage in any activity that is illegal or is in violation of organization's policies.
1. Workstations display a login banner outlining the terms and conditions of access and are accepted before access is granted. This is configured and enforced via a Meraki profile and is applied to all Luma workstations. 
1. Platform/applications also may not be used for any other purpose that is illegal, unethical, or against company policies or contrary to organization's best interests. Messages containing information related to a lawsuit or investigation may not be sent without prior approval.
1. Solicitation of non-company business, or any use of organization's platform/applications for personal gain is prohibited.
1. Access to production infrastructure is possilble via an encrypted VPN channel only.
1. The use of removable media such as USB Drives to transfer covered information is not permitted and restricted by technical controls.
1. Transmitted messages may not contain material that criticizes the organization, its providers, its employees, or others.
1. Users may not misrepresent, obscure, suppress, or replace another user's identity in transmitted or stored messages.
1. Workstation hard drives will be encrypted using FileVault 2.0 or equivalent.
1. All workstations have firewalls enabled to prevent unauthorized access unless explicitly granted.
1. Workstations used for ePHI access will have Cisco Meraki System Agent to allow for tracking and remote wipe out of data.
1. Workstations used for ePHI access will have anti-virus installed.
1. Workstations must have the CrowdStrike Falcon sensor installed as the EDR solution.
1. Workstation will be prevented from running certain mobile code, such as Java, JavaScript, ActiveX, PDF, postscript, Shockwave movies, and Flash via the installed EDR solution.
3. Workstations must have lockout enabled after 5 minutes of no use. The lockout screen requires the user to log in.
4. Workstations during work hours must remain at the facility whose access is restricted via card access.
5. Password policies for workstations are enforced through Meraki's technical controls and prohibit users from changing password lengths and authentication requirements.
6. Luma uses workstations until they are at their end of life wherein they will be remotely wiped through Meraki and disposed of at a trusted recycling authority in exchange for a certificate of destruction.
7. Repurposed workstations will be remotely wiped through Meraki
1. Luma employees are authorized to work remotely from a Luma provided device as a result of the above controls being in place.

## 7.9 Wireless Access Use

1. Luma production systems are accessible directly over wireless channels.
2. When accessing production systems via remote wireless connections, the same system access policies and procedures apply to wireless as all other connections, including wired.
3. Wireless networks managed within Luma non-production facilities (offices, etc.) are secured with the following configurations:
   * All data in transit over wireless is encrypted using WPA2 encryption;

## 7.10 Employee Termination Procedures

1. The Human Resources Department (or other designated department), users, and their supervisors are required to notify the Security Officer upon completion and/or termination of access needs and facilitating completion of the "Termination Checklist".
2. The Human Resources Department, users, and supervisors are required to notify the Security Officer to terminate a user's access rights if there is evidence or reason to believe the following (these incidents are also reported on an incident report and is filed with the Privacy Officer):
   * The user has been using their access rights inappropriately;
   * A user's password has been compromised (a new password may be provided to the user if the user is not identified as the individual compromising the original password);
   * An unauthorized individual is utilizing a user's User Login ID and password (a new password may be provided to the user if the user is not identified as providing the unauthorized individual with the User Login ID and password).
3. The Security Officer will terminate users' access rights immediately upon notification, and will coordinate with the appropriate Luma employees to terminate access to any non-production systems managed by those employees.
4. The Security Officer audits and may terminate access of users that have not logged into organization's platform/applications for an extended period of time.

## 7.11 Paper Records

Luma does not use paper records for any sensitive information. Use of paper for recording and storing sensitive data is against Luma policies.

## 7.12 Password Management

1. User IDs and passwords are used to control access to Luma systems and may not be disclosed to anyone for any reason.
2. Users may not allow anyone, for any reason, to have access to any portion of the platform using another user's unique user ID and password.
1. Users are required to sign an agreement which details their responsibility to keep passwords confidential.
3. On the messaging platform, password configurations are set to require:
   * a minimum length of 12 characters; at least one in 3 of 4 character sets: upper/lower case, numbers, symbols
   * a 120-day password expiration;
   * account lockout after 3 invalid attempts within a 5 second period.
   * 2 factor authentication is available via third party mobile apps such as Authy
4. On the production platform, password configurations are governed by rules set forth by AWS as controled by our IDP, Google GSuite IdP, and in addition Luma policy requires two factor authentication.
5. All system and application passwords must be stored and transmitted securely.
   * Where possible, passwords should be stored in a hashed format using a salted cryptographic hash function (SHA-256 or equivalent).
   * Passwords that must be stored in non-hashed format must be encrypted at rest pursuant to the requirements in [??17.8](17-data_integrity_policy.html#178-production-data-security).
   * Transmitted passwords must be encrypted in flight pursuant to the requirements in [??17.9](17-data_integrity_policy.html#179-transmission-security).
6. Each platform system automatically requires users to change passwords at a pre-determined interval as determined by the organization, based on the criticality and sensitivity of the ePHI contained within the network, system, application, and/or database.
7. Passwords are inactivated immediately upon an employee's termination (refer to the [Employee Termination Procedures in ??7.10](#710-employee-termination-procedures)).
8. All default system, application, and Partner passwords are changed before deployment to production and following any indication of compromise.
9. Upon initial login, users must change any passwords that were automatically generated for them, requiring a new password immediately upon account recovery.
10. Password change methods must use a confirmation method to correct for user input errors.
11. All passwords used in configuration scripts are secured and encrypted.
12. If a user believes their user ID has been compromised, they are required to immediately report the incident to the Security Office.
    * Employees are provided access to a banned password list that is updated on a bi-annual basis
14. In cases where a user of the messaging platform has forgotten his/her password, the following procedure is used to reset the password.
    * The user submits a password reset request via the web to receive an email for a unique link that allows them to reset their password.
    * Link expires in seven days.
15. In cases when a user of the production platform has forgotten his/her password, password is reset per policy set forth by AWS.
16. Passwords are not displayed when entered.
17. A list of commonly-used, compromised, and weak passwords is available and updated every 180 days and when passwords are suspected to have been compromised.

## 7.11 Customer Account Termination Procedures

Once a Customer ceases to be a Customer, as defined below, the following steps are:

1. Customer requests to cancel Luma services via email or phone. If the request is made over the phone, customer will confirm request over email. Luma can also elect to cease services if there is a compromise of the contract.
1. Customer's request will be reviewed by the Customer Success team to understand customer needs and confirm request to cancel. During this period, Customer may decide to rescind request to cancel.
1. If request to cancel is confirmed, all patient communications will be turned off immediately and Customer will no longer have access to Luma services unless otherwise agreed upon for these two to happen on a later date.
1. Data will be retained according to [Data Retention Policy ??18.2](18-data_retention_policy.html#182-data-retention-policy).

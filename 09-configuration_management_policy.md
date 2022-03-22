---
nav_order: 9
last_modified_date: Mon Feb 5 13:50:29 2018 -0800
---

# 9. Configuration Management Policy

Luma standardizes and automates configuration management with documentation of all changes to production systems and networks. All systems are configured automatically according to established and tested policies, and are used as part of our Disaster Recovery plan and process.

## 9.1 Applicable Standards

### 9.1.1 Applicable Standards from the HITRUST Common Security Framework

* 06 - Configuration Management

### 9.1.2 Applicable Standards from the HIPAA Security Rule

* 164.310(a)(2)(iii) Access Control & Validation Procedures


## 9.2 Configuration Management Policies

1. No systems are deployed into Luma environments without approval of the Luma CTO or authorized representative.
1. All changes allowed within the AWS environment to production systems, network devices, and firewalls are approved by the Luma CTO or authorized representative before they are implemented to assure they comply with business and security requirements.
1. All changes to production systems are tested before they are implemented in production.
1. Implementation of approved changes are only performed by authorized personnel.
1. Any deviations from the standard configuration or updates to the standard configuration are documented and approved in a a change control system
1. Systems will be deployed following the standard baseline configuration instructions found in Luma Health’s internal Wiki. This baseline shall include applicable security controls such as Firewalls, Logging and Endpoint Protection.
1. New configuration rules beyond a baseline-hardened configuration that allow traffic to flow through network security devices such as firewalls and network-based IPS, are also documented and recorded, with a specific business reason for each change, a specific individual's name responsible for that business need, and an expected duration of the need.
1. System security parameters shall be defined to prevent misuse. This will include but is not limited to following the principles of least privilege, role based access control.
1. Any software used must not be classed as end-of-life by the manufacturer and must still be a supported version. 
1. Any operating systems and tools used must release shared system resources back to the system when not in use and ensure they are protected from disclosure to ensure they cannot be intentionally or unintentionally accessed. 
1. An up-to-date inventory of systems is available via Amazon AWS.
   * All systems are categorized as production and development to differentiate based on criticality.
1. All frontend functionality (web portals) are separated from backend (database and app servers) systems by being deployed on separate servers or containers.
1. All software and systems are tested using unit tests and end to end tests to the greatest extent possible.
1. All committed code is reviewed using pull requests to assure software code quality and proactively detect potential security issues in development when deemed necessary.
1. Luma utilizes continuous development strategy to assure proper functionality.
1. Luma also deploys environments locally to assure functionality before moving to production.
1. Clocks are continuously synchronized to an authoritative source across all systems using NTP or a platform-specific equivalent. Modifying time data on systems is restricted.


## 9.3 Provisioning Production Systems

1. Before provisioning any systems, team members must communicate a request either via ClickUp or Slack.
1. The CTO, or an authorized delegate of the CTO, must approve the provisioning request before any new system can be provisioned.
1. Once provisioning has been approved, team members must configure the new system according to the standard baseline chosen for the system's role.
1. If the system will be used to house production data (ePHI), team members must use the production ready environment provided by AWS.
1. Once the system has been provisioned, team members must contact the security team to inspect the new system.


## 9.4 Changing Existing Systems

1. Before rolling out the change to production, team members must discuss the change with other team members and document it.
1. Once the request has been approved by the CTO or authorized representative, team members may roll out the change into production environments.
1. If a software component reaches end of life or is otherwise no longer supported by the manufacturer, then a plan must be developed to upgrade or replace this component. Luma Health’s standard Change Control procedures will be followed in this event.
1. In the event that any servers, physical or virtual need to be migrated, this must always be done over an encrypted channel, and product systems must be separated from non-production systems, either physically or logically. 


## 9.5 Patch Management Procedures

1. Luma does not have root access to the virtual machines. Patches are managed by AWS.
2. Patches on user devices such as laptops are centrally managed via an MDM solution. Luma's Information Security team pushes out required patches on demand. Security related updates, such as anti-virus definition updates are automatically applied as they become available. 


## 9.6 Software Development Procedures

1. All developers use feature branches based on the main branch used for the current release. Any changes required for a new feature or defect fix are committed to that feature branch.
   * These changes must be covered under 1) a unit test where possible, or 2) integration tests.
1. Developers are strongly encouraged to follow the [commit message conventions suggested by GitHub](https://github.com/blog/926-shiny-new-commit-styles).
   * Commit messages should be wrapped to 72 characters.
   * Commit messages should be written in the present tense. This convention matches up with commit messages generated by commands like git merge and git revert.
1. Once the feature and corresponding tests are complete, a pull request will be created using the GitHub web interface. The pull request should indicate which feature or defect is being addressed and should provide a high-level description of the changes made.
1. Code reviews are performed as part of the pull request procedure. Once a change is ready for review, the author(s) will notify other engineers using an appropriate mechanism, typically via an `@channel` message in Slack.
   * Other engineers will review the changes, using the guidelines above.
   * Engineers should note all potential issues with the code; it is the responsibility of the author(s) to address those issues or explain why they are not applicable.
1. If the feature or defect interacts with ePHI, or controls access to data potentially containing ePHI, the code changes must be reviewed by two members before the feature is marked as complete.
   * This review must include a security analysis for potential vulnerabilities such as those listed in the [OWASP Top 10](https://www.owasp.org/index.php/Top10) or the [CWE top 25](http://cwe.mitre.org/top25/).
   * This review must also verify that any actions performed by authenticated users will generate appropriate audit log entries.
   * Team members are required to undergo annual training on identifying the most common software vulnerabilities and will receive ongoing training on Luma's compliance and security requirements.
1. Once the review process finishes, each reviewer should leave a comment on the pull request saying "looks good to me" (often abbreviated as "LGTM") or approval on the pull request using built-in GitHub mechanisms, at which point the original author(s) may merge their change into the release branch.


## 9.7 Software Release Procedures

1. Software releases are treated as changes to existing systems and thus follow the procedure described in [§9.4](#94-changing-existing-systems).


## 9.8 Network Security

1. Security gateways (e.g. firewalls) are configured to filter traffic between domains, block unauthorized access, and are used to maintain segregation between internal wired, internal wireless, and external network segments (e.g. the internet) including DMZs and enforce access control policies for each of the domains
   * Firewalls restrict inbound and outbound traffic to the minimum necessary
   * Routing controls are implemented through security gateways (e.g., firewalls) used between internal and external networks (e.g., the Internet and 3rd party networks)
   * Firewall configurations restrict connections between un-trusted networks and any system components in the covered information environment; and any changes to the firewall configuration are updated in the network diagram
1. Network is logically and physically segmented with a defined security perimeter and a graduated set of controls, including subnetworks for publicly accessible system components that are logically separated from the internal network, based on organizational requirements; and traffic is controlled based on functionality required and classification of the data/systems based on a risk assessment and their respective security requirements
1. Network traffic is controlled in accordance with the access control policy through firewall and other network-related restrictions for each network access point or external telecommunication services managed interface
1. Information in networks, availability of network services and information services using the network, and the protection of connected services from unauthorized access is ensured
1. Equipment on the network, including equipment in user areas is formally managed using Meraki
1. Remote devices are not permitted to establish VPN split tunneling
1. Users connecting to the internal network have restrictions using a deny-by-default and allow-by-exception policy at managed interfaces according to the access control policy and the requirements of clinical and business applications
1. Network devices that require authentication mechanisms before establishing a connection are uniquely identified and authenticated and that at a minimum, use shared information (i.e., MAC or IP address) and access control lists to control remote network access
1. Exceptions to the network security policy are documented with a business need, duration of the exception, and reviewed on an annual basis. 
	* Exceptions are removed when no longer supported by a business need


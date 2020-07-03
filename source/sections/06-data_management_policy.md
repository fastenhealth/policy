# 6.  Data Management Policy

Luma has procedures to create and maintain retrievable exact copies of electronic protected health information (ePHI) stored.

 Data backup is an important part of the day-to-day operations of Luma. To protect the confidentiality, integrity, and availability of ePHI, complete backups are done daily to assure that data remains available when it needed and in case of a disaster. To accomplish this, Luma utilizes Apitible's [backup service](https://www.aptible.com/documentation/deploy/reference/databases/backups.html) which makes daily backups retained for 90 days and monthly backups retained for six years. Backups are copied to 2 geographically redundant regions as detailed in the prior link. 

Violation of this policy and its procedures by workforce members may result in corrective disciplinary action, up to and including termination of employment.

Of note, Luma does not physically house any systems used by its Platform in Luma facilities. The physical infrastructure environment is hosted at Amazon Web Services (AWS) including the network components and supporting network infrastructure. Luma does not own any equipment which houses ePHI. 

## 6.1 Applicable Standards

### 6.1.1 Applicable Standards from the HITRUST Common Security Framework

* 01.v - Information Access Restriction

### 6.1.2 Applicable Standards from the HIPAA Security Rule

* 164.308(a)(7)(ii)(A) - Data Backup Plan
* 164.310(d)(2)(iii) - Accountability
* 164.310(d)(2)(iv) - Data Backup and Storage

##  6.2 Backup Policy and Procedures

1. Perform daily snapshot backups of all systems that process, store, or transmit ePHI for Luma Customers as automated by Aptible's Backup Service.
2.  The Luma Ops Team is designated to be in charge of backups.
3.  Dev Ops Team members are trained and assigned to complete backups if deemed necessary beyond the automated backups as above. This is managed through the Aptible dashboard. 
4. Document backups
   * Name of the system
   * Date & time of backup
   * Where backup stored (or to whom it was provided)
5. Securely encrypt stored backups in a manner that protects them from loss or environmental damage.
6. Test backups and document that files have been completely and accurately restored from the backup media.

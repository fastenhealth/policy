---
nav_order: 6
last_modified_date: Fri Jan 7 06:59:05 2022 -0700
---

{: .warning }
This page is under development and may contain inaccurate content.

# 6.  Data Management Policy

Fasten has procedures to create and maintain retrievable exact copies of electronic protected health information (ePHI) stored.

Data backup is an important part of the day-to-day operations of Fasten. To protect the confidentiality, integrity, and availability of ePHI, complete backups are done daily to assure that data remains available when it is needed and in case of a disaster. To accomplish this, Fasten utilizes MongoDB Atlas’ [backup service](backup service).

Violation of this policy and its procedures by workforce members may result in corrective disciplinary action, up to and including termination of employment.

Of note, Fasten does not physically house any systems used by its Platform in Fasten facilities. The physical infrastructure environment is hosted at Amazon Web Services (AWS) including the network components and supporting network infrastructure. Fasten does not own any equipment which houses ePHI.

## 6.1 Applicable Standards

### 6.1.1 Applicable Standards from the HITRUST Common Security Framework

* 01.v - Information Access Restriction

### 6.1.2 Applicable Standards from the HIPAA Security Rule

* 164.308(a)(7)(ii)(A) - Data Backup Plan
* 164.310(d)(2)(iii) - Accountability
* 164.310(d)(2)(iv) - Data Backup and Storage

## 6.2 Backup Policy and Procedures

1. Perform daily snapshot backups of all systems that process, store, or transmit ePHI for Fasten Customers as automated by AWS’ Backup Service.
1. The Fasten Ops Team is designated to be in charge of backups.
1. DevOps Team members are trained and assigned to complete backups if deemed necessary beyond the automated backups as above. This is managed through the Amazon AWS dashboard.
1. Document backups
   * Name of the system
   * Date & time of backup
   * Where backup stored (or to whom it was provided)
1. Securely encrypt stored backups in a manner that protects them from loss or environmental damage.
1. Backups are replicated to an alternate location to ensure redundancy. This is achieved via AWS availability zones in both AWS and MongoDB.
1. Test backups and document that files have been completely and accurately restored from the backup media.

## 6.3 Data Classification


1. Fasten, based on the data classification level, registers media prior to use, places reasonable restrictions on how such media be used, and provide an appropriate level of physical and logical protection for media containing covered information until properly destroyed or sanitized
1. Media is labeled, encrypted, and handled according to its classification
1. Guidelines are issued by the organization on the ownership, classification, retention, storage, handling and disposal or all records and information
2. Sensitivity of systems and applications is identified and defined by the system / appplication owner. Fasten considers all systems and applications that contain customer information to be confidential and are defined by the system owner as such
3. Fasten considers all customer information to be confidential
4. All employee issued devices are considered confidential and can be traced to the individual
5. All AWS infrastructure is considered confidential and is the responsibility of Fasten’s SRE team



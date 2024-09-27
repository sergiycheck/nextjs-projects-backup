import { ContainerWrapper } from "@/components/common/container-wrapper";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <ContainerWrapper className="mt-32 flex flex-col">
        <div className="max-w-2xl mx-auto flex flex-col space-y-10">
          <h1 className="h1 lg:text-6xl">Privacy Policy</h1>
          <h2 className="h2 text-gray-400">Last updated: January 07, 2024</h2>
          <p className="p leading-10">
            We appreciate the trust you place in us when sharing your personal data. The security of that data is very
            important to us.
          </p>
          <p className="p leading-10">
            This Privacy Policy describes the manner in which Craft studio collects, uses, maintains, and discloses
            information collected from users (each, a “User”) of the{" "}
            <Link href={"https://craft-studio.vercel.app/"} target="_blank">
              https://craft-studio.vercel.app/
            </Link>{" "}
            website
          </p>
        </div>

        <div className="max-w-6xl mt-28 flex flex-col items-center mx-auto space-y-10">
          <h2 className="h2">Collecting and Using Your Personal Data</h2>

          <p className="p leading-10">
            While using our Site, we may ask you to provide us with certain personally identifiable information that can
            be used in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the
            newsletter, fill out a form, submit a CV, and in connection with other activities, services, features or
            resources we make available on our Site. Personally identifiable information may include, but is not limited
            to:
          </p>

          <ul className="list-disc list-inside w-full grid grid-cols-1 sm:grid-cols-2">
            <div>
              <li className="p leading-10  ml-6">Email address</li>
              <li className="p leading-10  ml-6">First name and last name</li>
              <li className="p leading-10  ml-6">Phone number</li>
              <li className="p leading-10  ml-6">Address, State, Province, ZIP/Postal code, City</li>
              <li className="p leading-10  ml-6">The company you work at</li>
              <li className="p leading-10  ml-6">Where is your company located</li>
            </div>

            <div>
              <li className="p leading-10  ml-6">Your job title</li>
              <li className="p leading-10  ml-6">The fact that you’ve visited our website</li>
              <li className="p leading-10  ml-6">What website referred you to craft</li>
              <li className="p leading-10  ml-6">
                Have you downloaded any marketing materials from our website https://craft-studio.vercel.app/
              </li>
              <li className="p leading-10  ml-6">Your LinkedIn profile address</li>
            </div>
          </ul>
        </div>

        <Divider />

        <div className="max-w-6xl  flex flex-col mx-auto space-y-10">
          <h2 className="h2">Collecting and Using Non-Personal Data</h2>

          <p className="p leading-10">Usage Data is collected automatically when using the Service.</p>
          <p className="p leading-10">
            Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address),
            browser type, browser version, the pages of our Site that You visit, the time and date of Your visit, the
            time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
          <p className="p leading-10">
            When You access the Site by or through a mobile device, We may collect certain information automatically,
            including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP
            address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p className="p leading-10">
            We may also collect information that Your browser sends whenever You visit our Site or when You access the
            Service by or through a mobile device.
          </p>
        </div>
        <Divider />
        <div className="max-w-6xl flex flex-col mx-auto space-y-10">
          <h2 className="h2">Tracking Technologies and Cookies</h2>
          <p className="p leading-10">
            We use Cookies and similar tracking technologies to track the activity on Our Site and store certain
            information. Tracking technologies used are beacons, tags, and scripts to collect and track information and
            to improve and analyze Our Site.
          </p>
          <p className="p leading-10">
            You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if
            You do not accept Cookies, You may not be able to use some parts of our Site.
          </p>
          <p className="p leading-10">
            Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on your personal computer or
            mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
          </p>
          <p className="p leading-10">We use both session and persistent Cookies for the purposes set out below:</p>

          <ul className="list-disc list-outside w-full space-y-10">
            <li className="p leading-10 ml-6">
              Necessary / Essential Cookies <br /> Type: Session Cookies <br /> Administered by: Us
              <br /> Purpose: These Cookies are essential to provide You with services available through the Website and
              to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of
              user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only
              use these Cookies to provide You with those services.
            </li>
            <li className="p leading-10  ml-6">
              Cookies Policy / Notice Acceptance Cookies <br />
              Type: Persistent Cookies
              <br />
              Administered by: Us
              <br />
              Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
            </li>
            <li className="p leading-10  ml-6">
              Functionality Cookies <br />
              Type: Persistent Cookies <br />
              Administered by: Us <br />
              Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
              your login details or language preference. The purpose of these Cookies is to provide You with more
              personal experience and to avoid You having to re-enter your preferences every time You use the Website.
            </li>
          </ul>
        </div>
        <Divider />

        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">Use of Your Personal Data</h2>

          <p className="p leading-10">The Company may use Personal Data for the following purposes:</p>
          <ul className="list-disc list-outside w-full space-y-10">
            <li className="p leading-10  ml-6">
              To provide and maintain our Site and services, including to monitor the usage of our Site.
            </li>
            <li className="p leading-10  ml-6">
              For the performance of a contract: the development, compliance, and undertaking of the purchase contract
              for the services You have purchased or of any other contract with Us through the Site.
            </li>
            <li className="p leading-10  ml-6">
              To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application’s push notification or sponsored content regarding updates or
              informative communications related to the functionalities, products, or contracted services, including the
              security updates, when necessary or reasonable for their implementation.
            </li>
            <li className="p leading-10  ml-6">
              To provide You with news, special offers, and general information about other goods, services, and events
              which we offer that are similar to those that you have already purchased or enquired about unless You have
              opted not to receive such information.
            </li>
            <li className="p leading-10  ml-6">To manage Your requests: To attend and manage Your requests to Us.</li>
          </ul>

          <p className="p leading-10">We may share your personal information in the following situations:</p>

          <ul className="list-disc list-outside w-full space-y-10">
            <li className="p leading-10  ml-6">
              With Service Providers: We may share Your personal information with Service Providers to monitor and
              analyze the use of our Service, to contact You.
            </li>

            <li className="p leading-10  ml-6">
              For Business transfers: We may share or transfer Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our
              business to another company.
            </li>
            <li className="p leading-10  ml-6">
              With Affiliates: We may share Your information with Our affiliates, in which case we will require those
              affiliates to honor this Privacy Policy.
            </li>
            <li className="p leading-10  ml-6">
              With Business Partners: We may share Your information with Our business partners to offer You certain
              products, services, or promotions.
            </li>
            <li className="p leading-10  ml-6">
              With other users: when You share personal information or otherwise interact in the public areas with other
              users, such information may be viewed by all users and may be publicly distributed outside. If You
              interact with other users or register through a Third-Party Social Media Service, Your contacts on the
              Third-Party Social Media Service may see Your name, profile, pictures, and description of Your activity.
              Similarly, other users will be able to view descriptions of Your activity, communicate with You, and view
              Your profile.
            </li>
          </ul>
        </div>
        <Divider />
        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">Retention of Your Personal Data</h2>
          <p className="p leading-10">
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
            Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal
            obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
            disputes, and enforce our legal agreements and policies.
          </p>
          <p className="p leading-10">
            The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for
            a shorter period of time, except when this data is used to strengthen the security or to improve the
            functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
          </p>
        </div>
        <Divider />
        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">Transfer of Your Personal Data</h2>
          <p className="p leading-10">
            Your information, including Personal Data, is processed at the Company’s operating offices and in any other
            places where the parties involved in the processing are located. It means that this information may be
            transferred to — and maintained on — computers located outside of Your state, province, country, or other
            governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.
          </p>
          <p className="p leading-10">
            Your consent to this Privacy Policy followed by Your submission of such information represents Your
            agreement to that transfer.
          </p>
          <p className="p leading-10">
            The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
            accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization
            or a country unless there are adequate controls in place including the security of Your data and other
            personal information.
          </p>
        </div>
        <Divider />

        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">Disclosure of Your Personal Data</h2>
          <h4 className="h4">Business Transactions</h4>
          <p className="p leading-10">
            If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred.
            We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
            Policy.
          </p>
          <h4 className="h4">Law enforcement</h4>
          <p className="p leading-10">
            Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so
            by law or in response to valid requests by public authorities (e.g. a court or a government agency).
          </p>
          <h4 className="h4">Other legal requirements</h4>
          <p className="p leading-10">
            The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <ul className="list-disc list-outside w-full space-y-10">
            <li className="p leading-10  ml-6">Comply with a legal obligation</li>
            <li className="p leading-10  ml-6">Protect and defend the rights or property of the Company</li>
            <li className="p leading-10  ml-6">
              Prevent or investigate possible wrongdoing in connection with the Service
            </li>
            <li className="p leading-10  ml-6">Protect the personal safety of Users of the Service or the public</li>
            <li className="p leading-10  ml-6">Protect against legal liability</li>
          </ul>
        </div>
        <Divider />
        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">Security of Your Personal Data</h2>
          <p className="p leading-10">
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the
            Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable
            means to protect Your Personal Data, We cannot guarantee its absolute security.
          </p>
        </div>
        <Divider />
        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">Your California Privacy Rights (California’s Shine the Light law)</h2>
          <p className="p leading-10">
            Under California Civil Code Section 1798 (California’s Shine the Light law), California residents with an
            established business relationship with us can request information once a year about sharing their Personal
            Data with third parties for the third parties’ direct marketing purposes.
          </p>
          <p className="p leading-10">
            If you’d like to request more information under the California Shine the Light law, and if you are a
            California resident, You can contact Us using the contact information provided below.
          </p>
        </div>
        <Divider />
        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">
            California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)
          </h2>
          <p className="p leading-10">
            California Business and Professions Code section 22581 allows California residents under the age of 18 who
            are registered users of online sites, services, or applications to request and obtain removal of content or
            information they have publicly posted.
          </p>
          <p className="p leading-10">
            To request the removal of such data, and if you are a California resident, You can contact Us using the
            contact information provided below and include the email address associated with Your account.
          </p>
          <p className="p leading-10">
            Be aware that Your request does not guarantee complete or comprehensive removal of content or information
            posted online and that the law may not permit or require removal in certain circumstances.
          </p>
        </div>
        <Divider />
        <div className="max-w-6xl  flex flex-col  mx-auto space-y-10">
          <h2 className="h2">Links to Other Websites</h2>
          <p className="p leading-10">
            Our Site may contain links to other websites that are not operated by Us. If You click on a third party
            link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy
            of every site You visit.
          </p>
          <p className="p leading-10">
            We have no control over and assume no responsibility for the content, privacy policies, or practices of any
            third party sites or services.
          </p>
        </div>
        <Divider />

        <div className="max-w-6xl  flex flex-col mx-auto space-y-10">
          <h2 className="h2">Changes to this Privacy Policy</h2>
          <p className="p leading-10">
            We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new
            Privacy Policy on this page.
          </p>
          <p className="p leading-10">
            We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
            effective and update the “Last updated” date at the top of this Privacy Policy.
          </p>
          <p className="p leading-10">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.
          </p>
        </div>
        {/* <div className="max-w-6xl  flex flex-col mx-auto space-y-10"></div> */}
      </ContainerWrapper>
    </>
  );
}

const Divider = () => <div className="w-full border-t-[0.2px] border-zinc-400/20 my-20"></div>;

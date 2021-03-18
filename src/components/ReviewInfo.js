function ReviewInfo({ store, goBack }) {
  const { PersonalInfo, BussinessInfo, DebitCardInfo } = store;
  return (
    <div>
      <h3>Review Info</h3>
      <section className='mt-2 p-2 card'>
        <h4>Personal Info</h4>
        <RenderReviewField {...{ title: 'Name', value: PersonalInfo.pname }} />
        <RenderReviewField {...{ title: 'SSN', value: PersonalInfo.pssn }} />
        <RenderReviewField {...{ title: 'Address', value: PersonalInfo.paddress }} />
        <RenderReviewField {...{ title: 'City', value: PersonalInfo.pcity }} />
        <RenderReviewField {...{ title: 'State', value: PersonalInfo.pstate }} />
        <RenderReviewField {...{ title: 'Zip Code', value: PersonalInfo.pzipcode }} />
      </section>
      <section className='mt-2 p-2 card'>
        <h4>Bussiness Info</h4>
        <RenderReviewField {...{ title: 'Name', value: BussinessInfo.bname }} />
        <RenderReviewField {...{ title: 'State Registered', value: BussinessInfo.breg }} />
        <RenderReviewField {...{ title: 'Address', value: BussinessInfo.baddress }} />
        <RenderReviewField {...{ title: 'City', value: BussinessInfo.bcity }} />
        <RenderReviewField {...{ title: 'State', value: BussinessInfo.bstate }} />
        <RenderReviewField {...{ title: 'Zip Code', value: BussinessInfo.bzipcode }} />
      </section>
      <section className='mt-2 p-2 card'>
        <h4>Debit Card Info</h4>
        <RenderReviewField {...{ title: 'Name', value: BussinessInfo.dname }} />
        <RenderReviewField {...{ title: 'Address', value: BussinessInfo.daddress }} />
        <RenderReviewField {...{ title: 'City', value: BussinessInfo.dcity }} />
        <RenderReviewField {...{ title: 'State', value: BussinessInfo.dstate }} />
        <RenderReviewField {...{ title: 'Zip Code', value: BussinessInfo.dzipcode }} />
      </section>
      <div className='mt-2'>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
}

export default ReviewInfo;

const leftSideclasses = 'w-25 text-right';
const rightSideclasses = 'ml-3 w-50 text-left';
const RenderReviewField = ({ title, value }) => (
  <div>
    <label className={leftSideclasses}>{title}</label>
    <label className={rightSideclasses}>{value}</label>
  </div>
);

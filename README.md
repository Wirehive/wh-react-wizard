# wh-react-wizard
React component to expand at most one contained card.

    <Wizard show={[
      this.state.expand_first,
      this.state.expand_second
    ]}>
      <div id="first_expanded">
        …
      </div>
      <div id="first_collapsed">
        …
      </div>
      <div id="second_expanded">
        …
      </div>
      <div id="second_collapsed">
        …
      </div>
    </Wizard>

